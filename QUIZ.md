# QUIZ Débutants
1. Angular est un framwork orienté
    - Composants --> ok
    - Modules
    - Javascript
* Angular est un framework orienté composants : votre application entière est un assemblage de composants

2. Quelle entreprise est à l'origine ?
    - Amazon
    - Facebook
    - Google --> ok
    - Microsoft
    - Apple
* Angular a été crée par Google : Google a officiellement annoncé Angular à la conférence ng-conf en Octobre 2014.

3. A quoi sert un transpilateur ?
    - Convertir son code TypeScript en code JavaScript
    - Améliorer la qualité de son code JavaScript
    - Modifier le comportement de sa page web sur les mobiles
    - Convertir du code JavaScript du standart ECMAScript 6 vers ECMAScript 5 --> ok
* Le transpilateur est un outil qui permet de publier son code pour les navigateurs qui ne supportent pas encore l'ES6 : le rôle du transpilateur est de traduire le code ES6 en code ES5

4. Quel est le langage recommandé pour le développement d'applications Angular ?
    - Dart
    - TypeScript --> ok
    - JavaScript
* L'équipe fondatrice d'Angular recommande fortement d'utiliser TypeScript. D'ailleurs, Angular2 lui-même est écrit avec TypeScript

5. Les navigateurs sont-ils capables d'interpréter le TypeScript directement ?
    - Oui
    - Non --> ok
* Les navigateurs ne savent pas interpréter le TypeScript : vous devez d'abord compilez votre code en JavaScript pour qu'il soit lisible par votre navigateur.

6. Quels sont les standards ci-dessous qui font partie du standard des WebComponents ? --> plusieurs réponses
    - Les imports HTML --> ok
    - Les feuilles de styles dynamiques
    - Le DOM de l'ombre --> ok
    - Les templates HTML --> ok
    - Le DOM virtuel
    - Les éléments personnalisés --> ok
* Les WebComponents sont composés de quatre technologies différentes, qui peuvent chacune être utilisé séparément, mais qui une fois assemblé forme le standard des WebComponents :
    - Les éléments personnalisés (Custom Elements)
    - Le DOM de l'ombre (Shadow DOM)
    - Les templates HTML (HTML Templates)
    - Les imports HTML (HTML Impots)

7. Est-il possible d'avoir plusieurs DOM de l'ombre sur une même page web ?
    - Oui --> ok
    - Non
* On peut avoir un DOM de l'ombre pour chaque élément personnalisé d'une page web, afin que chacun d'eux puisse profiter du système d'encapsulation, il est donc possible d'avoir plusieurs DOM de l'ombre sur une même page web !

8. Comment appelle-t-on le module à la base de toute application Angular ?
    - Le module unique
    - Le module originel
    - Le module ancêtre
    - Le module racine --> ok
* Au minimum, votre application doit contenir un module : le module racine. Au fur et à mesure que votre application se développera, vous rajouterez d'autres modules pour couvrir de nouvelles fonctionnalités, qui seront donc des sous-modules du module racine.


# QUIZ Intermédaires
1. Parmi les listes ci-dessous, laquel correspond aux méthodes disponibles pour interagir avec le cycle de vie d'un composant, dans l'ordre chronologique où elles sont appelés par Angular ?
    - ngOnInit - ngAfterViewInit - ngOnChanges - ngOnDestroy
    - ngDoCheck - ngOnInit - ngOnDestroy - ngOnChanges
    - ngOnChanges - ngOnInit - ngAfterViewInit - ngOnDestroy --> ok
    - ngOnInit - ngDoCheck - ngAfterViewInit - ngOnChanges
* La bonne réponse est ngOnChanges - ngOnInit - ngAfterViewInit - ngOnDestroy. La méthode appelée en premier est ngOnChanges, lors de la création d'un composant, avant même ngOnInit. NgOnDestroy est appelé en dernier, avant que Angular ne détruise et ne retire du DOM le composant

2. On peut développer le template d'un composant
    - Sur plusieurs lignes via l'annotation du composant --> ok
    - Dans un fichier spécifique, séparé du composant --> ok
    - Dans un service spécial qui gère uniquement les templates de l'application --> ok
    - Sur une seule ligne, dans l'annotation du composant.
* Le template d'un composant peut être développé de trois manière différentes :
Sur une seule ligne, dans l'annotation d'un composant, sous forme de chaîne de caractères.
Sur plusieurs lignes grâce à l'opérateur backtick `.
Dans un fichier séparé grâce à la propriété templateUrl de l'annotation du composant.
Bien sûr, on n'utilise jamais les services pour développer des templates

3. Comment appelle-t-on le fait d'afficher une propriété d'un composant dans son template ?
    - La superposition
    - L'extrapolation
    - L'intra-liaison
    - L'interpolation --> ok
* La manière la plus simple d'afficher la propriété d'un composant dans son template est d'utiliser le mécanisme de l'interpolation. Avec l'interpolation, nous pouvons afficher la valeur d'une propriété dans la vue d'un template, entre deux accolades, comme ceci : {{ maPropriete }}

4. Quels éléments ci-dessous sont des directives ?
    - Les directives structurelles --> ok
    - Les composants --> ok
    - Les pipes
    - Les modules de fonctionnalités
    - Les directives d'attributs --> ok
    - Aucun des éléments ci-dessus !
* Il existe trois types de directives :
    - Les composants : Tous les composants sont des directives.
    - Les directives d'attributs : Elles peuvent modifier le comportement des éléments HTML, des attributs, des propriétés et des composants.
    - Les directives structurelles : Ces directives sont responsables de mettre en forme une certaine disposition d'éléments HTML, en ajoutant, retirant ou manipulant des éléments et leur fils.

5. A quoi sert l'annotation @HostListener ?
    - Elle permet d'héberger notre application chez l'hébergeur Listener
    - Elle permet de lier une méthode d'une directive à un événement donné --> ok
    - Elle permet d'intercepter les interactions de l'utilisateur dans le composant
    - Elle permet d'indiquer à Angular qu'une classe est une directive
* L'annotation @HostListener permet de lier une méthode de notre directive à un événement donné.

6. Quels sont les pipes disponible de base dans une application Angular ?
    - DatePipe --> ok
    - ColorPipe
    - CountryPipe
    - LowerCasePipe --> ok
    - CurrencyPipe --> ok
* Angular est fourni avec un certain nombre de pipes qui sont immédiatement disponibles dans tous nos templates : DatePipe pour afficher les dates au bon format, UpperCasePipe et LowerCasePipe pour mettre un texte en minuscule ou en majuscule, CurrencyPipe pour l'affichage des devises ($, €),

7. Quel est l'opérateur permettant d'intercepter toutes les requêtes vers l'application ?
    - L'opérateur |
    - L'opérateur ** --> ok
    - L'opérateur +
    - L'opérateur ?
* L'opérateur '**' permet d'intercepter toutes les routes d'une application :
{ path: '**', component: PageNotFoundComponent }

8. Quels sont les types de module qui existent dans une application ?
    - Les modules complémentaires
    - Le module racine --> ok
    - Les modules de fonctionnalités --> ok
    - Les modules sources
* Chaque application possède au minimum un module : le module racine. La plupart des applications ont besoin de modules de fonctionnalités en plus du module racine.

9. Avec quelle annotation doit-on décorer les services ?
    - @HostListener
    - @Injectable --> ok
    - @Directive
    - @Injection
* Le décorateur @Injectable doit être appliqué à nos services. Il permet d'indiquer à Angular que ce service peut lui-même avoir d'autres dépendances.

# QUIZ Expoerts
1. Quelles sont les différents types de formulaires que l'on peut développer avec Angular ?
    - Les formulaires pilotés par le template --> ok
    - Les formulaires pilotés par les données
    - Les formulaires pilotés par les flux
    - Les formulaires pilotés par le modèle --> ok
* Il y a deux types de formulaires différents :
    - Les formulaires pilotés par le template.
    - Les formulaires pilotés par le modèle.
Chaque type de formulaires a ses avantages et ses inconvénients. Pour faire simple, les formulaires pilotés par le template sont plus adaptés aux formulaires de petite taille, et inversement.

2. Quel est le rôle de la directive NgModel ?
    - NgModel permet de déclarer une nouvelle entité dans notre application
    - NgModel permet de vérifier qu'un formulaire est valide ou non, en fonction d'un modèle de données.
    - NgModel permet de mettre ne place une liaison bi-directionnelle entre le composant et le template --> ok
    - NgModel gère l'état des champs d'un formulaire en temps réel, via certaines des classes spécifiques --> ok
* Le rôle principal de la directive NgModel est de mettre en place une liaison de données bi-directionnelle pour chacun des champs du formulaire sur lequel elle est appliquée.
En plus, la directive s'occupe aussi d'ajouter et de retirer des classes pour chacun des champs du formulaire : ng-touched, ng-valid, etc ... Ainsi, vous pouvez savoir si l'utilisateur a cliqué ou non sur un champ, si la valeur du champ a changé, ou s'il est devenu invalide. En fonction de ces informations, on peut changer l'apparence d'un champ, faire apparaître un message d'erreur ou de confirmation, etc ...

3. Quel module est utilisé pour développer des formulaires pilotés par le modèle ?
    - FormsModule
    - ModelFormModule
    - ReactiveFormsModule --> ok
    - NgFormModule
* Il existe deux modules différents pour créer des formulaires sur Angular : FormsModules ou ReactiveFormsModule.
Ils proviennent de la même librairie : @angular/forms .
Ces deux modules répondent au même besoin, mais selon un approche différente. Pour faire simple, le premier (FormsModules) développe une partie importante du formulaire dans le template, alors que le ReactiveFormsModule est plus centré sur le développement du formulaire côté composant, on dit qu'il est piloté par le modèle.

4. A quoi sert le FormBuidler fournit par Angular ?
    - Il permet de centraliser la définition des formulaires de son application
    - Il permet de construire des formulaires sans validation
    - Il permet de simplifier la définition des formulaires pilotés par le modèle --> ok
    - Il permet de définir des formulaires directement dans le template d'un composant
* Le FormBuilder, ou constructeur de formulaire, est une classe utilitaire proposé par Angular pour simplifier la déclaration des formulaires pilotés par le modèle.

5. Quelle librairie est recommandée pour implémenter la programmation réactive dans une application Angular ?
    - Bacon.js
    - ReactiveProgramming
    - RxJS --> ok
    - Actuellement, il n'existe pas de librairie pour la programmation réactive

* La bibliothèques la plus populaire pour la programmation réactive dans l'écosystème JavaScript, est RxJS. Et c'est également celle qui a été choisie par l'équipe de développement d' Angular, puisqu’elle est incluse dans les dépendances de base d'un projet Angular.

6. Quelle est la principale différence entre une Promesse et un Observable ?
    - Les promesses sont plus performantes que les observables
    - Les promesses sont plus adaptés pour les requêtes one-shot, alors que les observables sont plus adaptés pour traiter des séquences d'événements --> ok
    - Seuls les observables permettent de faire des requêtes d'ajout sur le serveur
    - Il n' a aucune différence entre les deux, c'est plus une question d'habitude
* Les requêtes one-shot, c'est-à-dire celles qui impliquent un résultat unique, sont plus simples à traiter avec des Promesses. De plus, les développeurs JavaScript sont souvent plus à l'aise avec les Promesses que avec les Observables.
Mais les requêtes ne sont pas toujours one shot. On peut commencer une requête, puis l'annuler, puis faire une requête différente avant que le serveur ait répondu à la première requête !

Cette séquence requête - annulation - nouvelle requête est difficile à implémenter avec des Promesses. C'est plus adapté de le faire avec des Observables, et aussi plus élégant

7. Dans quelles situations les Guards peuvent être utilisés ?
    - Pour mettre en place un système d'authentification --> ok
    - Pour vérifier la récupération de données avant une redirection
    - Pour gérer les redirections dans l'application --> ok
* Les Guards peuvent être utiliser pour gérer différents scénarios liés à la navigation de votre application : rediriger un utilisateur qui tente d'accéder à une route précise, obliger l'utilisateur à s'authentifier pour accéder à certains modules, etc ...
Même si tous les Guards sont conçus pour interagir avec la navigation, il en existe des types différents :

Le Guard CanActivate peut influencer sur la navigation d'une route, et notamment la bloquer. C'est ce type de Guard que l'on va utiliser pour construire un système de navigation.
Le Guard CanActivateChild pour influencer sur la navigation d'une route fille.
Le Guard CanDeactivate pour gérer la navigation de la route actuel.
Le Guard Resolve pour effectuer une récupération de données avant de naviguer.
Le Guard CanLoad pour gérer la navigation vers un sous-module chargé de manière asynchrone.

8. Quels sont les outils de tests actuellement recommandés par la documentation officielle d'Angular
    - Protractor --> ok
    - Karma --> ok
    - Amazia
    - Jasmine --> ok
* Il existe beaucoup d'outils et de technologies pour écrire des tests. Cependant, certains d'entre eux sont connus pour particulièrement bien fonctionner :
Jasmine : ce framework permet tester votre code JavaScript.
Karma : Karma permet d'écrire et d'exécuter des tests tout en continuant à développer l'application.
Protractor : ce framework permet de tester vos interfaces et des parcours utilisateurs automatiquement.
Ces outils peuvent être utilisés pour des projets qui ne sont pas des projets Angular !
Ils s'appliquent au monde du web de manière générale.

9. L' intérêt de la phase de déploiement est de mettre sur le serveur de production uniquement les fichiers nécessaires au fonctionnement de l'application ?
    - Vrai --> ok
    - Faux
* C'est vrai. Le dossier dans lequel vous travaillez contient beaucoup de fichiers qui ne sont pas nécessaires en production. Par exemple vos fichiers TypeScript, le navigateur ne sait pas les interpréter ! Pourquoi les déployer