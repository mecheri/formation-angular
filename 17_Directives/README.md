# Directives 
Une Directive est une classe décorée par @Directive

## Directives d'attributs
* Modifie l'apparence ou le comportement d'un élément DOM

## Directives de structure
* Modifie la structure du DOM en ajoutant ou en supprimant des éléments
* Elle sont précedées de (*)

### NgIf
* NgIf ne masque pas les éléments avec du CSS
* NgIf ajoute et supprime physiquement du DOM
* NgIf traite une expression booléenne
```html
<div _ngcontent-c0="">A</div>
<!--bindings={
  "ng-reflect-ng-if": "false"
}-->
```
* NgIf supprime l'élément du DOM et le détache de l'arbre d'événements de ce dernier
* NgIf détache l'élément du mécanisme de "change detection" d'Angular
* Quand un élément est caché, il reste attaché au DOM et ses évenement. Angular aussi reste à l'écoute des changements des propriétés bindées

### Préfixe (*) 
Est un "Sucre syntaxique" qui permet à Angular de transformer le *ngIf en "ng-template" qui entoure l'élément DOM  
```html
<div *ngIf="prop">{{prop.name}}</div>
<ng-template [ngIf]="prop">
  <div>{{prop.name}}</div>
</ng-template>
```
* "ng-template" est un élément interne d'Angular pour l'affichage HTML
