# Bindings
### Bindings types
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