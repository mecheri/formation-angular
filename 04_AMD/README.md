# AMD (Asynchronous Module Definition)
* Spécifie un standard (syntaxe) de modules JavaScript de sorte que les modules puissent charger leurs dépendances de façon asynchrone
* L'API est constituée de :
    - define(): qui définit un module en renvoyant une valeur ou une fonction
    - require(): qui est similaire mais se contente d'effectuer un simple callback
* L'implémentation dominante de AMD se trouve dans RequireJS
* Conçu pour le chargement asynchrone
* Utilisation principale coté navigateurs