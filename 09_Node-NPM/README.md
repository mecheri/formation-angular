# Node.js
* Environnement d’exécution JavaScript construit sur le moteur JavaScript V8 de Chrome
* Pas un framework web
* Execution Javascript coté serveur --> interaction avec le système
* Moteur asynchrone et orienté événnements

## V8
Moteur d’exécution JavaScript open source de Google, écrit en C++ et utilisé dans Google Chrome et Node.js. Il implémente la norme ECMAScript

## Boucle d'événnement et mode asynchrone
![alt text](https://github.com/mecheri/formation-angular/blob/master/Images/event-loop.jpg)

```javascript
// Code bloquant -> synchrone
// pour executer la ligne 2 il faut attendre la lecture du fichier
// Pas d'exploitation de la boucle d'événnements de node.js et le coté async
var content = fs.readFileSync('file.txt');
console.log(content);
```

```javascript
// Code non bloquant -> asynchrone
// Lorsque le fichier sera lu, le code de la fonction passée en parametre sera exécuté
// Si il y a du code apres cette instruction, node.js pourra l'executer en attendant d'avoir les informations sur le fichier en cours de lecture
// Un disque dur faible --> exécution plus rapide
fs.readFile('file.txt', (err, content) => {
    if(err) {
        throw err;
    }
    console.log(content);
})
```

# NPM
## https://www.npmjs.com/
* Gestionnaire de paquets ou modules de Node.js
* Gestionnaire de dépendances pour une application

## Gestion locale
### package.json
* Documente les packages dont le projet dépend
* Deux champs sont obligatoires: "name" et "version"
* Spécifie les versions des differents packages
* Facilite le partage avec d'autres dev
### 2 types de dépendances
* "dependencies": requis par le projet en production
* "devDependencies": requis uniquement en dev et test

## Gestion globale
Pour utilisation comme un outil de ligne de commande

## Package
Dossier contenant un programme décrit par un fichier package.json

## Module
* Tout ce qui peut être chargé avec "require" ou "import" dans un programme Node.js
* Un dossier avec un fichier package.json contenant un champ "main"
* Un dossier avec un fichier index.js dedans
* un fichier Javascript
* La plupart des packages npm sont des modules

## Structures de dossiers et fichiers
* Installation locale: ./node_modules du package courant
* Installation globale: "/usr/local" ou "C:\Users\m.mecheri\AppData\Roaming\npm\node_modules"

## Semantic-versioning
### Pour publier
* 1er  compteur: version majeure
* 2eme compteur: version mineure
* 3eme compteur: bug fix, patch

### Pour consommer
Si on commence avec un package version 1.0.4 :
* Patch  : 1.0 ou 1.0.x ou ~1.0.4
* Mineur : 1 ou 1.x ou ^1.0.4
* Majeur : * ou x