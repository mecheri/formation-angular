<p align="center">
    <img src="https://github.com/mecheri/formation-angular/blob/master/resources/images/ecma.jpg" width="200" height="200" style="display:block;margin: 0 auto;">
</p>

# ECMAScript
Standard (ensemble de normes) pour les langages de programmation de type script (JavaScript, ActionScript ...)

## Versions
Version  | Description
---      | ---
1997 ECMAScript 1 | 1er édition
1998 ECMAScript 2 | Modification et/ou amélioration mineures
1999 ECMAScript 3 | RegEx et try/catch
ECMAScript 4	  | Annulée
2009 ECMAScript 5 | "strict mode" et support JSON.
2015 ECMAScript 6 | Fonctions Flêchées, Classes, Modules, ... --> une vraie révolution du Javascript
2016 ECMAScript 7 | Exponential operator (**), Array.prototype.includes
ESnext (en cours de dev) | Async/await, opérateur de binding, décorateurs, observable, attributs d'instances publics et privés

## Support navigateurs
Version  | Support
---      | ---
ECMAScript 3 | supporté par tout les navigateurs
ECMAScript 5 | supporté par tout les navigateurs modernes
ECMAScript 6 | supporté partiellement par les navigateurs
ECMAScript 7 | supporté très faiblement par les navigateurs

## Implémentations navigateurs
Aujourd’hui tous les navigateurs modernes sont capables de comprendre le Javascript de norme ES5.
Et ils evoluent pour comprendre les normes encore plus avancées. Mais ils ne sont pas encore capables de comprendre 100% des ajouts d’ES6 et encore moins d’ES7

## [Quel navigateur supporte quelle fonctionnalité](http://kangax.github.io/compat-table)

Pour résoudre ces problemes d'implémentations.
- <strong>Polyfills</strong>: du code qui permet aux navigateurs web qui ne disposent pas certaines fonctionnalités d’ES6 ou ES7 de fonctionner correctement.
- <strong>Transpilers</strong>: permet de traduire du code écrit avec la syntaxe ES6 ou ES7 en code ES5 équivalent.

# Programmtion Orientée Prototype
* Est une forme de programmation orientée objet sans classe, fondée sur la notion de <strong>prototype</strong>.
    ```javascript
    // Fonction constructeur d'objet
    // "this" représente l'objet qui possède le code
    function User(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    // Création de l'instance
    var user = new User("Léo", "Messi");

    // Ajout d'une propriété à un constructeur existant --> Impossible
    User.nationalite = "Français";

    // Pour le faire --> Utilisation de la propriété prototype
    User.prototype.nationalite = "Français";

    // On peut ajouter aussi des fonction
    User.prototype.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
    ```

# Modules JS
* Des morceaux de code Javascript "self-contained" avec des fonctionnalités distinctes
* Ces modules peuvent être ajoutés, supprimés, modifiés si necessaire sans perturber l'ensemble du système avec possibilité de réutilisation

# Module loaders & Module bundlers

## Module loaders
* Généralement une bibliothèque qui peut charger, interpréter et exécuter des modules JavaScript.
* Dans une application avec plusieurs modules, il peut être assez pénible de s'assurer que tous les fichiers sont inclus et dans le bon ordre.
* Un Module loader s'occupera de la gestion des dépendances en s'assurant que tous les modules sont chargés lors de l'exécution de l'application.
* Les Module loaders les plus populaires sont RequireJS et SystemJS.

## Module bundlers
* Ils font la même chose que les Module loaders (gérer et charger des modules interdépendants), mais pendant la construction de l'application avant l'exécution.
* Au lieu de charger les dépendances telles qu'elles sont définient dans le code, un bundler assemble tous les modules en un seul fichier (un bundle) avant l'exécution.
* Les Module bundlers les plus populaires sont Webpack et Browserify.

## Quand utiliser quoi?
* Le choix dépend de la structure et de la taille de l'application
* Un bundler génère beaucoup moins de fichiers que le navigateur doit télécharger --> peut réduire le temps de chargement.
* Un loader peut fournir de meilleures performances, car le chargement d'un gros fichier monolithique peut également bloquer le démarrage de l'application.