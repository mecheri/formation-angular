# Affichage des données
### Interpolation
```html
{{ demo }}
```
### Constructeur ou variables d'initalisation ?
* dépend de la nature de variable
```typescript
export class AppCtorComponent {
  title: string = "toto";
  demo: string;

  constructor() {
    this.demo = 'Demo';
  }
}
```
### *ngFor Structurale Directive
```html
<li *ngFor="let demo of demos">
  {{ hero }}
</li>
```
### Modèle de données
```typescript
export class Demo {
  constructor(
    public id: number,
    public label: string) { }
}
heroes: Demo[] = [
  new Hero(1, 'A'),
  new Hero(2, 'B'),
  new Hero(3, 'C')
];
```
### *ngIf Structurale Directive
```html
<p *ngIf="demos.length > 3">Il y a trop de demos!</p>
```


# Templates
### Interpolation
```html
<p>La somme de 1 + 1 is {{1 + 1}}</p>
```
### Expressions
```html
<div [prop]="expression"></div>
```

### Contexte d'expressions --> scope du Component
```html
<div [hidden]="demos.length > 3"></div>
```

### Statements
```html
<button (click)="deleteDemo()">Delete demo</button>
```

### Bindings
* One-way : to-the-dom   --> {{expression}}, [target]="expression"
* One-way : from-the-dom --> (target)="statement"
* Two-way : both         --> [(target)]="expression"

### Binding targets
Target  | Target  | Exemples
---     |---      | ---
Property| DOM property| <img [src]="imgUrl">
--      | Component property| <demo-detail [demo]="currentDemo"></demo-detail>
--      | Directive property| <div [ngClass]="{'special': isSpecial}"></div>
Event   | DOM event| <button (click)="onSave()">Save</button>
--      | Component event| <demo-detail (deleteRequest)="deleteDemo()"></demo-detail>
--      | Directive event| <div (myClick)="clicked=$event" clickable>click me</div>
Two-way | Event and property| <input [(ngModel)]="demo.label">
Attribute | Attribute | <button [attr.aria-label]="help">help</button>
Class | class property | <div [class.active]="isActive">Active</div>
Style | style property | <button [style.color]="isActive ? 'red' : 'green'">

### Two-way binding
Voir l'exemple

# Cycle de vie (Lifecycle Hooks)
* Un component un cycle de vie géré par Angular
* Moments clés:
    1. Angular crée un Compnent et le rend
    2. Angular crée et restitue ses enfants
    3. Angular vérifie si les propriétés bindées changent pour le mettre à jour
    4. Angular détruit le Component
    5. Angular retire le Component du DOM
* Angular fournit des Hooks pour avoir la main sur ces moments clés
* Une Directive a le meme cycle de vie qu'un Component
* On accede aux interfaces des Lifecycle Hooks dans @angular/core
* Chaque interface a une methode préfixée par "ng" ex: OnInit --> ngOnInit
* Aucune Directive ou Composant n'implémentera tous les hooks

Après la création d'un Component/Directive en appelant son constructeur, Angular appelle les méthodes de hook:
## ngOnInit()
* Initialise un Component/Directive juste après la construction et la définition des propriétés bindées par Angular
* ngOnInit() est appelée une seule fois
* Il ne faut faire d'appels pour récuperer des données dans un constructeur mais dans le ngOnInit()
* Le constructeur sert à initialiser les variables locales

## ngOnChanges()
* Appelé avant ngOnInit() et chaque fois qu'une ou plusieurs propriétés "Input" changent

## ngDoCheck()
* Permet de détecter et agir sur les modifications que Angular ne détecte pas
* Ce hook a un coût important car il est appelé avec une fréquence énorme
* Peu importe où le changement s'est produit, il est déclenché
* ngDoCheck() et ngOnChanges() ne doivent etre implementés dans le meme Component

### ngAfterContentInit() pour (ng-content)
* Repond quand Angular charge le contenu externe dans les vues d'un Component

### ngAfterContentChecked() pour (ng-content)
* Repond quand Angular détecte un changement dans le contenu externe d'un Component
* Appelé souvent

### ngAfterViewInit() pour (child Component)
* Repond quand Angular initialise les vues d'un Component et celles de ses enfants

### ngAfterViewChecked() pour (child Component)
* Repond quand Angular détecte un changement dans les vues d'un Component et celles de ses enfants
* Appelé souvent

## ngOnDestroy()
* Permet le nettoyage juste avant la déstruction du Component/Directive par Angular
* Permet de notifier que Component/Directive va etre détruit
* Permet libérer les ressources non gérées par le garbage collecteur
    - Désabonnement des events du DOM
    - Stopper les minuteurs et mes setInterval()
* Risque de fuite de mémoire si s'est pas utilisé


# Interactions des Components
1. Parent vers l'enfant avec le décorateur "Input"
2. Parent vers l'enfant avec un setter de la propriété "Input"
3. Parent vers l'enfant avec ngOnChanges()
4. Parent à l'écoute d'un événement enfant aveec le décorateur "Output"
5. Parent interagit avec l'enfant via une variable locale
6. Parent appelle un @ViewChild()
7. Parent et enfants communiquent via un service