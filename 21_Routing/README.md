# Routing & Navigation
* Le Router Angular permet la navigation entre les vues --> 3 possibilités
    - Entrer une URL dans la barre de navigation
    - Cliquer sur les liens
    - Cliquer sur les boutons Précédent et Suivant du navigateur pour naviguer en avant et arrière

## Intérêt du Routing
* Implémenter des applications modulaires
* Implémenter l'application en fonction des rôles (certains rôles ont accès à certaines URL)

## Integration
* Le Router Angular ne fait pas partie du Noyau d'Angular. 
* Il a son propore package @angular/router
* RouterModule fournit les services et les directives nécessaires pour naviguer
```typescript
import { RouterModule, Routes } from '@angular/router';
```

## base href
* Le Router utilise "history.pushState" du navigateur pour naviguer --> https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur#Adding_and_modifying_history_entries
* Les applications de routage (SPA) doivent ajouter une balise "base href" au fichier index.html 
* La balise "base href" est le premier enfant de la balise head est utilisée pour activer le "history.pushState"
* Le navigateur utilise la valeur "base href" pour préfixer les URL relatives lors du chargement des fichiers CSS, de scripts et d'images.

## Configuration
* Une application Angular avec navigation a une unique instance du service Router. 
* Lorsque l'URL du navigateur change, le Routeur recherche une Route correspondant à un Componnent à afficher.
* Un Router n'a pas de Routes avant de les configurer
    - appRoutes : Tableau de Routes général de l'appli
    - RouterModule.forRoot: prend en argument le tableau Routes et renvoie un module de routeur configuré
    - Chaque Route est liée à un Component. ILe Router analyse et crée l'URL finale
    - data: pour stocker des données arbitraires (titre de page, texte fil d'ariane ...)
    - Le chemin vide représente le chemin d'accès par défaut à l'application
    - Le chemin ** dans la dernière route est un caractère générique. Le Router sélectionnera cette route si l'URL demandée ne correspond à aucune Route
    - L'ordre des Routes est important, les Routes les plus spécifiques doivent être placés au-dessus des Routes moins spécifiques.
    - enableTracing: permet de voir les événements pendant le cycle de vie de la navigation sur la console du navigateur

## Router outlet
* Est une directive de la bibliothèque du Router qui marque l'emplacement des Templates d'un Router
* Pour que le Router soit opérationnel il faut indiquer la balise "router-outlet"
* Quand le Router détecte une Route existante il charge le Component correspondant et injecte son Template à l'interieur de la balise "router-outlet"

## Links
### RouterLink
```html
<a routerLink="/menu1" routerLinkActive="active">Menu 1</a>
```
### Programmatical Link
```typescript
this.router.navigate(['/demo']);
```

## ActivatedRoute
* Service fourni à chaque Component avec une Route 
* Contient des informations spécifiques à la Route (paramètres, données statiques, les données de résolution... )

## Router state
* Après la fin de chaque cycle de vie de navigation réussi, le routeur génère une arborescence d'objets ActivatedRoute qui constituent l'état actuel du routeur, l'url, les paramètres, des Routes parent et enfants.
```typescript
  constructor(private router: Router) {
    this.router.routerState;
  }
```

## Router events
* Lors de la navigation, le Router émet des événements via la propriété Router.events. Ces événements vont du début à la fin de la navigation
    - NavigationStart: déclenché lorsque la navigation démarre
    - RoutesRecognized: déclenché lorsque le routeur analyse l'URL et que les Routes sont reconnus
    - NavigationEnd: déclenché lorsque la navigation se termine avec succès
    - NavigationCancel: déclenché lorsque la navigation est annulée (ex: RouteGuard renvoyant faux pendant la navigation)
    - NavigationError: déclenché lorsque la navigation échoue en raison d'une erreur inattendue

## Route Parameters
### Declaring
```typescript
  { path: 'demo/view/:id', component: DemoDetailComponent }
  // http://localhost:4200/demo/view/1
```
### Linking
/    : Racine de l'application
none : Component enfant courant
../	 : Parent du Component coutrant Current component parent routes

```typescript
<a [routerLink]="['/demo/view', demo.id]"> {{ demo.id }}</a>

// Programmatically
goToDemoDetail(id) {
  this.router.navigate(['demo', 'view', id]);
}
```
### Reading
```typescript
<a [routerLink]="['/demo/view', demo.id]"> {{ demo.id }}</a>

// Programmatically
goToDemoDetail(id) {
  this.router.navigate(['demo', 'view', id]);
}
```

## Child Routes
* Lorsque on veut utiliser des Routes dans d'autres Routes, il faut créer des Routes enfants
* Comme le placeholder "routeur-outlet" pour l'application racine, les Components enfants d'un autre Component seront inserés dans un decond placeholder "routeur-outlet" dédié uniquement au Component parent.
```typescript
{
    path: 'demo-detail',
    component: DemoDetailComponent,
    children: [
      { path: '', redirectTo: 'view/:id', pathMatch: 'full' },
      { path: 'view/:id', component: DemoViewComponent },
      { path: 'edit/:id', component: DemoEditComponent }       
    ]
  }
```

## Guards navigation
* Permettent de contrôler si l'utilisateur peut accéder ou non à une Route donnée
* Permettent aussi de contrôler si un utilisateur peut quitter une Route donnée
* Il existe 4 types de Guards pour proteger les Routes:
    - CanActivate      : Décide si une Route peut être activée
    - CanActivateChild : Détermine si les Routes enfants d'une Route peuvent être activées
    - CanDeactivate    : Détermine si une route peut être désactivée
    - CanLoad          : Détermine si un module peut être chargé de manière "Lazy"
* Un Guard est une fonction qui renvoie soit Observable de boolean, Promise de boolean ou boolean. 
* Les Guards sont des services enregistrés dans le tableau des providers, ils peuvent donc être injectés par Angular

## Optional Parameters
* Query parameters permettent de transmettre des paramètres facultatifs à une Route, tels que des informations de pagination. (localhost:4200/demo-list?page=2)
* Pour cela, il faut utiliser la directive [queryParams] avec [routerLink] pour transmettre les paramètres de requête
```html
<a [routerLink]="['demo-list']" [queryParams]="{ page: 99 }">Go to Page 99</a>
```
```typescript
goToPage(pageNum) {
    this.router.navigate(['/demo-list'], { queryParams: { page: pageNum } });
}
```

## LocationStrategy and browser URL styles
* Lorsque le Router accède à une nouvelle vue d'un Component, il met à jour l'historique du navigateur avec l'URL de cette vue. 
* Cette URL est strictement locale. Le navigateur ne doit pas envoyer cette URL au serveur et ne doit pas recharger la page.
* Les navigateurs HTML5 modernes prennent en charge history.pushState, qui modifie l'historique d'un navigateur sans déclencher de demande de page coté serveur. (localhost:4200/demo/)
* Les navigateurs anciens envoient des demandes au serveur lorsque l'URL change sauf si la modification se produit après un "#" (hash). (localhost:4200/src/#/demo/)
* Le Router prend en charge les deux styles:
    - PathLocationStrategy : HTML5 pushState (par défaut dans Angular)
    - HashLocationStrategy : Utilisation du "hash"
```typescript
RouterModule.forRoot(routes, { useHash: true })
```