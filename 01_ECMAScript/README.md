<p align="center">
    <img src="https://github.com/mecheri/formation-angular/blob/master/resources/images/ecma.jpg" width="200" height="200" style="display:block;margin: 0 auto;">
</p>

# ECMAScript
Standard (ensemble de normes) pour les langages de programmation de type script (JavaScript, ActionScript ...)

# Versions
Version  | Description
---      | ---
1997 ECMAScript 1 | 1er édition
1998 ECMAScript 2 | Modification et/ou amélioration mineures
1999 ECMAScript 3 | RegEx et try/catch
ECMAScript 4	  | Annulée
2009 ECMAScript 5 | "strict mode" et support JSON.
2015 ECMAScript 6 | Fonctions Flêchées, Classes, Modules --> une vraie révolution du Javascript
2016 ECMAScript 7 | Exponential operator (**), Array.prototype.includes

# Support navigateurs
Version  | Support
---      | ---
ECMAScript 3 | supporté par tout les navigateurs
ECMAScript 5 | supporté par tout les navigateurs modernes
ECMAScript 6 | supporté partiellement par les navigateurs
ECMAScript 7 | supporté très faiblement par les navigateurs

# Implementations navigateurs
Aujourd’hui tous les navigateurs modernes sont capables de comprendre le Javascript de norme ES5.
Et ils evoluent pour comprendre les normes encore plus avancées. Mais ils ne sont pas encore capables de comprendre 100% des ajouts d’ES6 et encore moins d’ES7

[Quel navigateur supporte quelle fonctionnalité](http://kangax.github.io/compat-table)
Version  | Navigateur
---      | ---
6 | Chrome (support partiel)
6 | Firefox (support partiel)
6 | Edge (support partiel)
6 | Safari (support partiel)
6 | Opera (support partiel)
5 | Chrome 23
5 | Firefox 21
5 | Safari 6
5 | Opera 15
5 | Edge 12
5 | IE 10

Pour résoudre ces problemes et développer moderne avec ces nouveaux standards dès aujourd’hui, on utilisera des polyfills et des transpilers.
- Polyfills: du code qui permet aux navigateurs web qui ne disposent pas certaines fonctionnalités d’ES6 ou ES7 de fonctionner correctement.
- Transpilers: permet de traduire du code écrit avec la syntaxe ES6 ou ES7 en code ES5 équivalent.

# Programmtion Orientée Prototype
* Est une forme de programmation orientée objet sans classe, fondée sur la notion de prototype.

# Prototype
* Un prototype est un objet à partir duquel on crée de nouveaux objets, et permet à ces objets d'hériter des propriétés et méthodes de ce prototype.
* En JavaScript, chaque objet a un prototype objet dont il hérite des méthodes et des attributs.
* Un prototype peut lui aussi avoir son prototype objet et ainsi de suite --> chaîne de prototypage.

# Modules
* Des morceaux de code Javascript "self-contained" avec des fonctionnalités distinctes
* Ces modules peuvent etre ajoutés, supprimés, modifiés si necessaire sans perturber l'ensemble du système
* Possibilité de réutiliser ces modules

## Module loaders & Module bundlers

### Module loaders
* Généralement une bibliothèque qui peut charger, interpréter et exécuter des modules JavaScript avec syntaxe AMD ou CommonJS.
* Dans une application avec plusieurs modules, il peut être assez pénible de s'assurer que tous les fichiers sont inclus et dans le bon ordre.
* Un Module loader s'occupera de la gestion des dépendances en s'assurant que tous les modules sont chargés lors de l'exécution de l'application.
* Les Module loaders les plus populaires sont RequireJS et SystemJS.

### Module bundlers
* Une alternative aux Module loaders.
* Fondamentalement, ils font la même chose (gérer et charger des modules interdépendants), mais pendant la construction de l'application avant l'exécution.
* Au lieu de charger les dépendances telles qu'elles définient dans le code, un bundler assemble tous les modules en un seul fichier (un bundle) avant l'exécution.
* Les Module loaders les plus populaires sont Webpack et Browserify.

### Quand utiliser quoi?
* Le choix dépend de la structure et de la taille de l'application
* Un bundler génère beaucoup moins de fichiers que le navigateur doit télécharger --> peut réduire le temps de chargement.
* Un loader peut fournir de meilleures performances, car le chargement d'un gros fichier monolithique peut également bloquer le démarrage de l'application.