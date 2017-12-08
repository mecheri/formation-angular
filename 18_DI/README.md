# Injection de dépendances
* Une classe reçoit ses dépendances de sources externes plutôt que de les créer.
* On ne peut pas construire une application Angular sans la DI
* Angular a son propre framework d'injection de dépendance
```typescript
export class Demo {
 
  public dep1: Dep1;
  public dep2: Dep2;
 
  constructor() {
    this.dep1 = new Dep1();
    this.dep2 = new Dep2();
  }
}
```
* La classe Demo crée tout ce dont elle a besoin à l'intérieur de son constructeur --> Classe fragile, inflexible, difficile à tester
* Si la classe Dep1 évolue et que son constructeur nécessite un paramètre --> la classe Demo doit changer --> fragilité
* De plus, la classe Demo ne présente pas la possibilté de partager des dépendances communes avec d'autres classes
* Lorsque on ne peut pas contrôler les dépendances, une classe devient difficile à tester
* comment faire ? DI 
```typescript
export class Demo {
 
  constructor(public dep1: Dep1, public dep2: Dep2) {
  }
}

let demo = new Demo(new Dep1(), new Dep2());
```
* La définition des dépendances est maintenant dans le constructeur. La classe Demo ne crée plus, elle consomme juste.
* Si la classe Dep1 change, il n'y aura aucun impact sur la classe Demo
* Maintenant, pour créer une classe Demo il faut aussi créer une la classe Dep1 et Dep2 
```typescript
export class DemoFactory {
  createCar() {
    let demo = new Demo(new Dep1(), new Dep2());
    return demo;
  }
}
```
* Cette Factory peut facilement grossir --> il faut un mécanisme pour le faire automatiquement

## L'intjecteur
* Permet d'enregistrer des classes, puis il se charge de les trouver et les créer si une dépendance est invoquée.
* Dans Angular il est chargé de créer des instances de service et de les injecter dans des classes

## Services
* Un service est juste une classe décorée de la metadata @Injectable qui sera enregistrée avec l'injecteur de dépendance Angular.
* Pour créer un Service, il faut fournir un tableau de Providers à l'injecteur
* Pour enregistrer un service il faut un décorateur qui prend en charge la propriété de tableau providers
### @Component vs @NgModule Providers
* La différence se porte sur la portée et la durée du vie de l'instance du service
* Les services de @NgModule 
    - Sont enregistés avec l'injecteur racine --> "Application Level"
    - L'injecter racine d'Angular crée une seule instance du serivce accessible dans toute l'appli
    - La durée de vie du service est la meme que celle de l'appli
* Les services de @Component
    - Sont enregistrés avec le propre injecteur de chaque instance de Component --> "Component Level"
    - Angular intejcte ces services uniquement dans l'instance du Component et de ses enfants
    - La durée de vie est limité à celle du Component --> à chaque nouvelle instance du component le service est injecté 
    - La DI d'Angular est un système d'injection hiérarchique, les injecteurs peuvent etre imbriqués et créer leurs propres instances de service.
    - Lorsque Angular crée une nouvelle instance d'un Component, il crée un nouvel injecteur enfant pour cette instance
    - Lorsque Angular détruit un Component, il détruit aussi l'injecteur du Component et les instances de service de cet injecteur.
* Le décorateur @Injectable() identifie une classe de service qui peut nécessiter des dépendances injectées
* Il faut toujours mettre le décorateur @Injectable(), meme si le service n'a pas de dépendances --> style de code cohérent
### Providers
* La configuration de l'injecteur et du tableau de providers est multile:
* providers: [Logger] <=> [{ provide: Logger, useClass: Logger }]
    - La propriété provide contient le token qui sert de clé pour enregistrer le service.
    - La deuxième propriété est toujours un objet de définition du service
* [{ provide: Logger, useClass: BetterLogger }]
* [ NewLogger, { provide: OldLogger, useClass: NewLogger}] --> crée deux instances de NewLogger
* [ NewLogger, { provide: OldLogger, useExisting: NewLogger}] --> référence la même instance de NewLogger
* [{ provide: Logger, useValue: objectLogger }] --> Enrgistrement d'objet sous forme de service
```typescript
export function LoggerFn() {}
const objectLogger = {
  logs: ['Hello World'],
  log: LoggerFn
};
```
* [{ provide: DemoService, useFactory: demoServiceFactory, deps: [Logger]}] --> Enrgistrement dynamique
```typescript
let demoServiceFactory = (logger: Logger) => {
    /* .....   */
  return new HeroService(logger);
};
```
### DI Tokens
* A l'enregistrement d'un Provider avec l'injecteur, Angular l'associe à un token d'injection de dépendance. 
* L'injecteur gère une mappe interne de token à laquelle il fait référence lorsqu'il cherche une dépendance.
#### DI Tokens types
* L'injection d'une instance de classe (Logger, DemoService)
* L'injection d'une "non-classe" (chaîne, une fonction ou un objet) --> ex: injecter la configuration de l'application
```typescript
export const DEMO_CONFIG: AppConfig = {
  apiEndpoint: 'api.demo.com',
  version: '1.0.0'
};

// AppConfig est une Interface TypeScript
// Le type Interface TypeScript ne peut pas être utilisée comme token d'injection pas Angular
// A la transpliation l'Interface TypeScript disparaît du JavaScript généré.
// --> il faut injecter le token aussi
import { InjectionToken } from '@angular/core';
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

providers: [{ provide: APP_CONFIG, useValue: DEMO_CONFIG }]

constructor(@Inject(APP_CONFIG) config: AppConfig) {}
```

### Dépendances facultatives
```typescript
import { Optional } from '@angular/core';

constructor(@Optional() private logger: Logger) {
  if (this.logger) { this.logger.log('Hello world'); }
}
```