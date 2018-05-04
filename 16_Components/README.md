# Cycle de vie (Lifecycle Hooks)
* Un component a un cycle de vie géré par Angular (Angular change detection)
* Moments clés:
    1. Angular crée un Compnent et le rend
    2. Angular crée et restitue ses enfants
    3. Angular vérifie si les propriétés bindées changent pour le mettre à jour
    4. Angular détruit le Component
    5. Angular retire le Component du DOM
* Angular fournit des Hooks pour avoir la main sur ces moments clés
* On accede aux interfaces des Lifecycle Hooks dans @angular/core
* Chaque interface a une methode préfixée par "ng" ex: OnInit --> ngOnInit
* Aucune Directive ou Composant n'implémentera tous les hooks

Après la création d'un Component/Directive en appelant son constructeur, Angular appelle les méthodes de hook:

## ngOnChanges()
* Appelé avant ngOnInit() et chaque fois qu'une ou plusieurs propriétés "Input" changent

## ngOnInit()
* Initialise un Component/Directive juste après la construction et la définition des propriétés bindées par Angular
* ngOnInit() est appelée une seule fois
* Il ne faut pas faire d'appels HTTP pour récuperer des données dans un constructeur mais dans le ngOnInit()
* Le constructeur sert à initialiser les variables locales

## ngDoCheck()
* Permet de détecter et agir sur les modifications que Angular ne détecte pas
* Ce hook a un coût important car il est appelé avec une fréquence énorme
* Peu importe où le changement s'est produit, il est déclenché
* ngDoCheck() et ngOnChanges() ne doivent pas être implementés dans le même Component

## ngAfterViewInit()
* Répond quand Angular initialise les vues d'un Component et celles de ses enfants

## ngAfterViewChecked()
* Appelé souvent et répond quand Angular détecte un changement dans les vues d'un Component et celles de ses enfants

## ngOnDestroy()
* Permet le nettoyage juste avant la déstruction du Component/Directive par Angular
* Permet de notifier qu'un Component/Directive va être détruit
* Permet de libérer les ressources non gérées par le garbage collecteur
    - Désabonnement des events du DOM
    - Stopper les timers et les setInterval()
* Risque de fuite de mémoire si il n'est pas utilisé

# Interactions des Components
1. Parent vers l'enfant avec le décorateur "Input"
2. Parent vers l'enfant avec un setter de la propriété "Input"
3. Parent vers l'enfant avec ngOnChanges()
4. Parent à l'écoute d'un événement enfant avec le décorateur "Output"
5. Parent interagit avec l'enfant via une variable locale
6. Parent appelle un @ViewChild()
7. Parent et enfants communiquent via un service