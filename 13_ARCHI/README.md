# Angular
* Angular est un framework d'application JavaScript.
* Angular fournit
    - une bibliothèque pour la construction de composants encapsulés,
    - l'injection de dépendances,
    - un langage de Template avec liaison de données,
    - un routeur d'application construit sur des observables,
    - une interface de ligne de commande
* Angular facilite la séparation de la logique d'affichage (Components) et de la logique métier (Services) pour que plusieurs équipes puissent travailler sur différents aspects de la même application.


## Concepts & Architecture générale
### Processus général
1. Templates HTML avec balisage Angular
2. Components pour gérer les templates
3. Ajout de la logique métier dans des Services
4. Mettre les Components et Services dans des Modules
5. Lancement de l'application en amorsant le module racine
6. Angular ce charge après de presenter le contenu coté navigateur


### Modules
* Angular a son propre système de modularité appelé NgModules
* Chaque application Angular a au moins un NgModule appelé AppModule par convention
* Un NgModule (racine ou autre) est une classe avec un decorateur @NgModule.
* Le decorateur @NgModule est une fonction qui prend en paramètre un objet de métadonnées:
    - declarations: les classes appartenant à ce module (3 types de classes: components, directives et pipes)
    - exports: les declarations qui doivent etre visible et utilisable dans d'autres modules
    - providers: instanciation des services qui deviennent accesibles dans toute l'application
    - bootstrap: définition du Component principal de l'application qui englobera toutes les autres classes de l'appli
* Lancement de l'application en amorçant le AppModule dans le main.ts


### Librairies Angular
* Angular est une collection de module Javascript
* Le nom de chaque librairie Angular est préfixé par @angular


### Components
* Un Component représente un morceau d'écran avec une logique applicative
* Un Component est une classe liée à un template HTML (vue)
* La classe interagit avec la vue via une API de propriétés et de méthodes
* Angular crée, met à jour et détruit des Components lorsque l'utilisateur navigue dans l'application


### Templates
* Morceau d'HTML qui décrit à Angular comment fonctionne un Component
* Un Template utilise des balises classique mais aussi des balises Angular qui penvent representer d'autres Components enfants ou des attributs personnalisés
* Les balises Angular étendent l'HTML


### Metadata
* Indiquent à Angular comment traiter une classe
* Si une classe n'est pas décorée de @Component alors ce n'est pas un Component Angular
* @Component prend en parametre un objet d'options nécessaire pour créer un Component et définit son Template
* Les options les plus connues sont: selector, templateUrl, providers ...
* Il existe d'autres décorateurs @Injectable, @Input, and @Output
* Pour que Angular sache quoi faire, il faut décorer les classes avec des métadonnées


### Data binding
* Afficher les données coté HTML sans un Framework comme Angular est très fastidieux, source d'erreurs et difficile à lire
* Le Data binding d'Angular est un mécanisme de coordination des Templates et des Components
* Balisage de liaison au Template HTML
#### to the DOM
* interpolation {{ demo.label }} : Affiche la valeur de la propriété
* property binding [demo] : Passe la valeur a la propriété demo
#### from the DOM
* event binding (click) : Appelle le Component quand l'utilisateur clique
#### both
* Two-way data binding ngModel: combine le property et event binding


### Angular Change detection
Angular scrute les changements de valeurs des proriétés bindées via un processus de "Change detection" qui s'exécute après chaque événement DOM (frappe, déplacement de la souris, timer, réponse de serveur).


### Directives
* Les Templates Angular sont dynamiques.
* Angular transforme le DOM selon les instructions des directives
* Une Directive est une classe décorée de @Directive
* Un Component est une Directive avec un Template
#### Structural Directives
* Modifient la structure d'une vue en ajoutant, supprimant et remplaçant des éléments du DOM
    - ex: *ngIf, *ngFor
#### Attribute Directives
* Modifient l'apparence ou le comportement d'un élément existant du DOM
    - ex: ngModel


### Services
* Un service est une classe avec un objectif spécifique et bien défini (logger, data, messages).
* Les Services effectuent des taches spécifiques à la place des Components.
* Un bon Component permet uniquement l'UX avec des propriétés et des fonctions pour le data-binding
* Les Components consomment beaucoup de services et en dépendent
* Les Services peuvent dépendre d'autres Services
#### Injection de dépendances
* Permet de fournir aux nouveaux Components les dépendances de Services dont ils ont besoin
#### Fonctionnement
1. Au lancement de l'application, Angular instancie un Injecteur
2. L'injecteur crée un conteneur de services
3. A la création d'un Component, Angular demande à l'injecteur les services requis par le Component
4. Si une instance de service demandée n'est pas dans le conteneur
5. L'injecteur en crée une et l'ajoute au conteneur
6. Lorsque tous les services demandés ont été résolus, Angular appelle le constructeur du Component
#### Comment l'injecteur sait qu'une instance d'un service est disponible
* Il faut préalablement enregistrer le service
#### Dans un Module
* Enregistrer un Service dans le AppModule -> l'instance est disponible partout
#### Dans un Component
* Enregistrer un Service dans un Component -> une nouvelle instance du service est disponible avec chaque nouvelle instance du Component


## Les WebComponents
https://www.webcomponents.org/introduction
* Les components Angular reprennent le principe d'encapsulation et la possibilité de réutilisation des WebComponents
* Les WebComponents font partie du navigateur et ne nécessitent pas de bibliothèque externe comme jQuery
* Les WebComponents peuvent être utilisés en ajoutant simplement une déclaration d'importation à une page HTML
* Tous les navigateurs ne supportent pas les WebComponents, il faut utiliser des polyfills pour les utiliser
* Les technologies des WebComponents:
    - Custom Elements: pour créer et enregistrer de nouveaux éléments HTML et les faire reconnaître par le navigateur.
    - HTML Templates: squelette pour créer des éléments HTML instanciables.
    - Shadow DOM: permet d'encapsuler le JavaScript et le CSS des éléments.
    - HTML Imports: pour packager ses composants (CSS, JavaScript, etc.) et permettre leur intégration dans d'autres pages.


### Shadow DOM
* Shadow DOM fait partie de la norme WebComponents et permet l'encapsulation de l'arborescence DOM et du style
* Shadow DOM permet d'appliquer des styles uniquement dans le scope de l'élement encapsulé sans aucun impact sur les éléments externes
### Shadow DOM & Angular
* Angular offre la possibilité de construire des Components.
* Un component est une classe avec un modèle et des styles qui lui appartiennent.
* Donc ressemble à un WebComponent mais n'en n'est pas un.
* A la création d'un Component, Angular place son template et son styles dans un shadowRoot, qui est le DOM Shadow particulier de ce Component.
* En réalité, Angular ne crée pas de Shadow DOM natif mais utilise une émulation (les navigateurs ne support pas le Shadow DOM natif)
* Cependant, on peut avec Angular générer du Shadow DOM natif pour un Component
* Il existe trois types d'encapsulation dans Angular:
    - ViewEncapsulation.None     - Pas de Shadow DOM, pas d'encapsulation de style aussi.
    - ViewEncapsulation.Emulated - Pas de Shadow DOM, mais avec une encapsulation de style.
    - ViewEncapsulation.Native   - Shadow DOM natif.
```typescript
import {ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-comp',
  templateUrl: 'my-comp.component.html',
  styles: [`
    .my-comp {
      background: green;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
class MyComponent {}
```