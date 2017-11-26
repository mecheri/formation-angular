# https://nodejs.org/en/

## Node.js 
* Environnement d’exécution JavaScript construit sur le moteur JavaScript V8 de Chrome
* Pas un framework web
* Execution Javascript coté serveur --> interaction avec le système
* Moteur asynchrone et orienté événnement

# V8 
Moteur d’exécution JavaScript open source de Google, écrit en C ++ et utilisé dans Google Chrome et Node.js. Il implémente la norme ECMAScript

# Asynchronisme et boucle d'evenements

![alt text](https://github.com/mecheri/formation-angular/blob/master/img/event-loop.jpg)

// pour executer la ligne 2 il faut attendre la lecture du fichier
// Code bloquant -> synchrone
// Pas d'exploitation de la boucle d'evenements de node.js et le coté async
var content = fs.readFileSync('file.txt');
console.log(content);

// Code non bloquant -> asynchrone
// Je veux que lise le fichier
// Lorsque tu auras lu ce fichier que pourra executer le code de la fonction passée en parametre
// Si il y a du code apres cette instruction, node.js pourra l'executer en attendant d'avoir les informations sur le fichier en cours // de lecture
// Un disque dur très faible executerai ce code plus rapidement (operation de lecture ecriture se font de maniere async)
fs.readFile('file.txt', (err, content) => {
    if(err) {
        throw err;
    }
    console.log(content);
})
