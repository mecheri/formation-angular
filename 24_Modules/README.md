# Bootstrapping
* Une application Angular a au moins un module, le module racine --> AppModule par convention
* @NgModule prend un objet de métadonnées qui indique à Angular comment compiler et lancer l'application

## Tableau des déclaratoion
* Indique à Angular quels sont les Components/Directives/Pipes qui appartiennent à l'AppModule.
* Lorsque on crée d'autres Components/Directives/Pipes, il faut les ajouter au tableau des déclarations.
* Si un Component/Directive/Pipe est utilisé sans déclaration dans un NgModule, un message d'erreur est remonté coté navigateur.
* Uniquement les Components/Directives/Pipes sont acceptés dans ce tableau

## Tableau des imports
* De nombreuses fonctionnalités d'Angular lui-même sont organisées en modules (HttpClientModule, RouterModule. Finalement)
* On peut créer aussi des modules custom.
* Ces Modules doivent être ajoutés au tableau des imports, lorsque l'appli en a besoin
* Uniquement les Modules avec le décorateur @NgModule sont acceptés dans ce tableau

## Tableau des providers
* Pour que la DI d'angular puisse injecter un service, il doit le créer une instance de ce service.
* Si on veut enregistrer un service et le rendre disponible partout, il faut l'ajouter dans le tableau des providers

## Tableau de bootstrap
* Angular lance l'appli en amorçant le AppModule.
* Le processus d'amorçage crée les Components listés dans ce tableau de bootstrap et insère chacun dans le DOM du navigateur.
* L'insertion d'un Component "bootstrapé" déclenche généralement une cascade de créations de Components qui remplissent cet arbre.
* La plupart des applications ont une seule Component de bootstrap.

## main.ts
* Configure l'environnement d'exécution.
* Extrait le Component racine du tableau bootstrap du module racine.
* Crée une instance du Component et l'insère dans la balise racine identifiée par le sélecteur du Component racine.

# FeatureModule (Modules de fonctionnalités)
* Fournit un ensemble cohérent de fonctionnalités axées sur un domaine d'activité d'application (Business Logic)
* Permet de partitionner l'application dans des domaines d'intérêt et de finalité spécifiques.
* Interagit avec le module racine et avec d'autres NgModules via les services, les Components/Directives/Pipes

## Lazy loading
* Des modules chargés en mode Lazy signifie qu'ils ne sont pas chargés mais "pre-chargés" coté navigateur jusqu'à ce que l'utilisateur navigue vers une Route qui corréspond à un de leurs Component.
* Cela permet de ne pas charger la totalité d'un module et tout son javascript au démarrage de l'application.
* Permet d'améliorer les performances perçues de l'application
* Les NgModules chargés en mode Lazy ou non sont créés une fois et ne sont jamais détruits.

## Shared modules
* Permettent de contenir les Components/Directives/Pipes communs
* Ce NgModule est ensuite partagés avec les autres NgModules qui ont en besoin.
* Le SharedModule doit importer CommonModule et FormsModule puis les ré-exporter, cela permet aux autre Modules de ne pas les importer mais uiliser directement depuis le shared

## Core module
* CoreModule permet de rassembler les Services et Componets qui seront importés une seule fois lorsque l'application démarre et qui ne seront jamais importés ailleurs.
* CoreModule est l'emplacement idéale des Services Singleton (AuthService ...), qui doivent être enregistré une fois, dans l'injecteur racine de l'application, lorsque l'application démarre.
* Seule le module racine doit importer CoreModule, il ne faut surtout pas qu'un module chargé en mode lazy l'importe.