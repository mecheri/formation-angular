# CommonJs
* CommonJS spécifie un standard de modules JavaScript en s'assurant que chaque module s'exécute dans son propre espace de noms.
* Les modules exportent explicitement les variables qu'ils veulent exposer, et en définissant les autres modules requis pour fonctionner correctement.
* Pour faire cela: 
    - la fonction require(), qui permet d'importer un module donné dans la portée actuelle
    - l'objet module, qui permet d'exporter quelque chose de la portée actuelle
* L'implémentation dominante de CommonJS se trouve dans Node.js
* Conçu pour le chargement synchrone
* Utilisation principale coté serveur