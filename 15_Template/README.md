# Affichage des données
### Constructeur / variables d'initalisation ?
```typescript
export class DemoComponent {
  title: string = "toto";
  demo: string;
  constructor() {
    this.demo = 'Demo';
  }
}
```
### Modèle de données
```typescript
export class Demo {
  constructor(
    public id: number,
    public label: string
  ) { }
}
demos: Demo[] = [
  new Hero(1, 'A'),
  new Hero(2, 'B'),
  new Hero(3, 'C')
];
```
```html
<li *ngFor="let demo of demos"> {{ hero }}</li>
```
### Interpolation
```html
{{ demo }}
<p>La somme de 1 + 1 est {{1 + 1}}</p>
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