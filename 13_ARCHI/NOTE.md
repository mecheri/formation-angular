## Concepts & Architecture générale

# Processus globale
1. Templates HTML avec balisage Angular
2. Components pour gérer les templates
3. Ajout de la logique applicative dans des Services
4. Mettre les Components et Services dans des Modules
5. Lancement de l'application en amorsant le module racine
6. Angular ce charge après de presenter le contenu coté navigateur 


# Modules
* Angular a son propre système de modularité appelé NgModules
* Chaque application Angular a au moins un NgModule appelé AppModule par convention
* Un NgModule (racine ou autre) est une classe avec un decorateur @NgModule.
* Le decorateur @NgModule est une fonction qui prend en paramètre un objet de métadonnées:
    - declarations: les classes appartenant à ce module (3 types de classes: components, directives et pipes)
    - exports: les declarations qui doivent etre visible et utilisable dans d'autres modules
    - providers: instanciation des services qui deviennent accesibles dans toute l'application
    - bootstrap: définition du Component principal de l'application qui englobera toutes les autres classes de l'appli
* Lancement de l'application en amorçant le AppModule dans le main.ts


# Librairies Angular
* Angular est une collection de module Javascript
* Le nom de chaque librairie Angular est préfixé par @angular
    - @Component vient de @angular/core
    - @NgModule vient du BrowserModule de @angular/platform-browser


# Components
* Un Component représente un morceau d'écran appelé une vue avec une logique applicative
* Un Component est une classe liée à un template HTML (vue)
* La classe interagit avec la vue via une API de propriétés et de méthodes
* Angular crée, met à jour et détruit des Components lorsque l'utilisateur navigue dans l'application


# Templates
* Morceau d'HTML qui décrit à angular comment fonctionne un Component
* Un Template utilise des balises classique mais aussi des balises Angular qui penvent representer d'autres Components enfants ou des attributs personnalisés
* Les balises Angular étendent l'HTML


# Metadata
* Indiquent à Angular comment traiter une classe
* Si une classe n'est pas décorée de @Component alors ce n'est pas un Component Angular
* @Component prend en parametre un objet d'options nécessaire pour créer un Component définir son Template
* Les options les plus connues sont: selector, templateUrl, providers ...
* Il existe d'autres @Injectable, @Input, and @Output  
* Pour que Angular sache quoi faire, il faut décorer les classes avec des métadonnées


# Data binding
* Afficher les données coté HTML sans un Framework comme Angular est très fastidieux, source d'erreurs et difficile à lire
* Le Data binding d'Angular est un mécanisme de coordination des Templates et de Components
* Balisage de liaison au Template HTML
## to the DOM
* interpolation {{demo.label}} : Affiche de la valeure de la propriété
* property binding [demo] : Passe la valeur a la propriété demo
## from the DOM
* event binding (click) : Appelle le Component quand l'utilisateur clique
## both 
* Two-way data binding ngModel: combine le property et event binding


# Directives
* Les Templates Angular sont dynamiques. 
* Angular transforme le DOM selon les instructions des directives
* Une Directive est une classe décorée de @Directive
* Un Component est une Directive avec un Template
## Structural Directives
* Modifient la structure d'une vue en ajoutant, supprimant et remplaçant des éléments du DOM
    - ex: *ngIf, *ngFor
## Attribute Directives
*  modifient l'apparence ou le comportement d'un élément existant du DOM
    - ex: ngModel


# Services
* Un service est une classe avec un objectif spécifique et bien défini (logger, data, messages). 
* Les Services effectuent des taches spécifiques à la place des Components. 
* Un bon Component permet uniquement l'experience utilisateur avec des propriétés et des fonctions pour le data-binding
* Les Components consomment beaucoup de services et en dépendent
* Les Services peuvent dépendre d'autres Services

# Injection de dépendances
* Permet de fournir aux nouveaux Component les dépendances de Services dont ils ont besoin
## Fonctionnement
1. Au lancement de l'application, Angular instancie un Injecteur
2. L'injecteur crée un conteneur de services
3. A la création d'un Component, Angular demande à l'injecteur les services requis par le Component
4. Si une instance de service demandée n'est pas dans le conteneur
5. L'injecteur en crée un et l'ajoute au conteneur
6. Lorsque tous les services demandés ont été résolus
7. Angular peut appeler le constructeur du Component

## Comment l'injecteur sait qu'une instance d'un service est disponible
* Il faut préalablement enregistrer le service
# Dans un Module
* Enregistrer un Service dans le AppModule -> l'instance est disponible partout
# Dans un Compoenent
* Enregistrer un Service dans un Component -> une nouvelle instance du service est disponible avec chaque nouvelle instance du Component