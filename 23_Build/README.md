# Support navigateurs
- Chrome  : latest
- Firefox : latest
- Edge    : 14, 13
- IE      : 11, 10, 9
- Safari  : 10, 9, 8, 7

# Polyfills
* Angular est construit sur les dernières normes Web. c'est difficle de cibler l'ensemble des navigateurs et leurs versions anterieurs
* On peut avoir besoin de polyfills supplémentaires pour prendre en charge les fonctionnalités non couvertes par cette liste.
* Les Polyfills sont activés dans le fichier src / polyfills.ts
* Les Polyfills obligatoires (tels que zone.js) sont installés automatiquement par CLI
* Les Polyfills optionnels, seront acités en installant les packages npm correspondant

# Angular Packages
## Dependencies
* Angular packages: noyau Angular + modules Angular optionnels.
    - @angular/animations: librairie Angular pour les effets d'animations
    - @angular/common                   : Directives, Pipes, HttpClient ...
    - @angular/core                     : necessaire pour l'exécution d'une appli Angular, inclut les décorateurs: Component, Directives ...
    - @angular/compiler                 : Parse les Templates pour les convertir en code qui fonctionne coté navigateur grâce à platform-browser-dynamic
    - @angular/forms                    : pour les formulaires template-driven et reactive forms
    - @angular/platform-browser         : prend en charge tout ce qui concerne la génération du DOM coté navigateur
    - @angular/platform-browser-dynamic : inclut les méthodes pour compiler et exécuter sur le client avec le compilateur JIT
    - @angular/router                   : pour la navigation
* Support packages: libraries tierces.
    - rxjs
    - zone.js: Permet à Angular de détécter les événements déclenchés par des opérations JavaScript natives.
* Polyfill packages: corrigent les differences d'implementation JS des navigateurs.

## DevDependencies
* @angular/cli: Les outils CLI Angular
* @angular/compiler-cli: le compilateur Angular, qui est invoqué par les commandes CLI

# Configuration TypeScript
* Les navigateurs ne peuvent pas exécuter TypeScript directement.
* Typescript doit être "transpilé" en JavaScript en utilisant le compilateur tsc, ce qui nécessite une certaine configuration.
* tsconfig.json permet de configurer le compilateur lors de la génération des fichiers JavaScript.
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "noImplicitAny": true,
  }
}
```

# Compilation
* Une application Angular se compose principalement de Components et de leurs Templates HTML.
* Avant que le navigateur ne rende l'application, les Components et les Templates sont convertis en JavaScript exécutable par le compilateur Angular
* Angular propose 2 modes de compilation:
## Just-in-Time (JIT): (par défaut)
* compile l'application dans le navigateur lors de l'exécution su Javascript
    - ng build
    - ng serve
    - ng build --prod --aot=false

## Ahead-of-Time (AOT):
* Compile l'application au moment de la construction du Javascript
    - ng build --aot
    - ng serve --aot
    - ng build --prod (--prod compile avec AOT par défaut --> https://github.com/angular/angular-cli/wiki)
* Avantages de AOT
    - Rendu plus rapide: le navigateur télécharge une version précompilée de l'application, puis exécute directement dans attendre la compilation
    - Moins de requêtes asynchrones: l'HTML et les CSS sont integrés dans le JavaScript, éliminant les requêtes ajax séparées pour charger ces ressources
    - La taille baisse: il n'est plus necéssaire de charger le compilateur Angular par le navigateur car l'application est compliée (le compilateur c'est 50% de d'Angular)
    - AOT détecte et signale les erreurs de binding Template/Component lors de la génération avant de les voir dans la console du navigateur.
    - AOT compile les Template/Component dans des fichiers JavaScript. En l'absence d'évaluation HTML ou JavaScript côté client, il existe moins de risque d'attaques par injection.
* 2 phases:
    1. Analyse et représentation des sources
    2. Génération de code

* Le compilateur AOT ne prend pas en charge les fonctions de flèche ou fonctions lambda à l'interieur d'une expression de metadata. Le compilateur génére une erreur et propose de transformer la fonction de flèche en une fonction exportée
```typescript
@Component({
  ...
  providers: [{provide: server, useFactory: () => new Server()}]
})

export function serverFactory() {
  return new Server();
}

@Component({
  ...
  providers: [{provide: server, useFactory: serverFactory}]
})
```

# Build
* Environnement hors production:
```bash
ng build --base-href=/my/app/ -e staging
```
Si les fichiers de déploiment doivent etre copiés dans un sous-dossier du serveur web, il faut préciser la baseHref

* Environnement de production:
```bash
ng build --base-href=/my/app/ --prod
ng build --base-href=/my/app/ --prod --aot=false
ng build --base-href=/my/app/ --prod --build-optimizer
```
* --prod permet:
    - Compilation AOT
    - Activation du mode production: pour un fonctionnement plus rapide en désactivant les contrôles spécifiques au développement
    - Concatènation des nombreux fichiers d'application en quelques paquets
    - Minification: supprime les espaces, les commentaires.
    - Uglification: réécrit le code pour utiliser des noms de variables et de fonctions courts
    - Élimination du code mort et des imports inutilent avec le mécanisme de Tree-shaking

* --build-optimizer permet de réduire la taille des bundles JavaScript générés
