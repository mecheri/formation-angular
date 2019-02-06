# Scope (portée)
* Détermine l'accessibilité des variables, des objets et des fonctions provenant de différentes parties du code.
* En JavaScript, il existe deux types de scope:
    - Scope local
    - Scope global
* Il existe aussi en JavaScript le scope fonctionnel: chaque fonction crée un nouveau scope

# Variables JavaScript
* En JavaScript, les objets et les fonctions sont aussi des variables.

## Variables JavaScript locales
* Les variables déclarées dans une fonction JavaScript deviennent LOCALES à la fonction.

## Variables JavaScript globales
* Une variable déclarée en dehors d'une fonction devient GLOBALE.
* Une variable GLOBALE a un scipe GLOBALE: tous les scripts et fonctions d'une page Web peuvent y accéder.
* En HTML, le scope globale est l'objet window. Toutes les variables globales appartiennent à l'objet window.
* Il ne faut pas créer de variables globales car elles peuvent écraser les variables (ou fonctions) de la fenêtre.

## Variables JavaScript automatiquement globales
* Si vous affectez une valeur à une variable non déclarée, celle-ci deviendra automatiquement une variable GLOBALE.
```javascript
myFunction();

function myFunction() {
    pi = 3.14;   // pi est globale
}
```
# Strict Mode "use strict"
* Aide à écrire du code plus propre, comme empêcher d'utiliser des variables non déclarées (exemple ci-dessus)

# La durée de vie des variables JavaScript
- La vie d'une variable JavaScript commence lors de sa déclaration.
- Les variables locales sont supprimées lorsque la fonction est terminée.
- Dans un navigateur Web, les variables globales sont supprimées lorsque vous fermez la fenêtre (ou l’onglet) du navigateur, mais restent disponibles pour les nouvelles pages chargées dans la même fenêtre.

# Self-Invoking Anonymous Function
* Est une fonction qui s'exécute automatiquement / immédiatement lorsque de sa création