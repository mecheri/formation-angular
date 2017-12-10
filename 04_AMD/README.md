# AMD (Asynchronous Module Definition)
* Spécifie une norme pour le JavaScript de sorte que les modules puissent charger leurs dépendances de façon asynchrone, résolvant les problèmes du chargement synchrone
* L'API est constituée de deux fonctions: 
    - define(): qui définit un module en renvoyant une valeur ou une fonction
    - require(): qui est similaire mais se contente d'effectuer un simple callback
* L'implémentation dominante de AMD se trouve dans RequireJS
* Conçu pour le chargement asynchrone
* Utilisation principale coté navigateurs