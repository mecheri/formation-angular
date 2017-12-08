https://cli.angular.io/

# Angular CLI
Interface de ligne de commande qui permet de créer un projet, d'ajouter des fichiers et d'exécuter des tâches de développement Angular.

### Installation
```bash
npm install -g @angular/cli
```

## Générer et lancer un projet Angular via server web de dev
```bash
ng new NOM-DU-PROJET
cd NOM-DU-PROJET
ng serve
```

## Génération de Components, Directives, Pipes et Services
Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`

* angular-cli ajoutera automatiquement une référence aux Components, Directives, Pipes et Services dans le fichier `app.module.ts` (module principal)
* pour référencer à partir d'un autre module
    - `ng g module new-module` pour créer le module
    - `ng g component new-module/new-component` pour ajouter la réference dans le nouveau module


## packaging
```bash
ng build --prod
```

## Test unitaire et bout en bout
```bash
ng test
ng e2e
```

## Mise à jour
```bash
npm uninstall --save-dev angular-cli
npm install --save-dev @angular/cli@latest
```
```bash
npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli@latest
```

## Configuration
https://github.com/angular/angular-cli/wiki/angular-cli

## Structure de fichiers
### Dossier src --> fichiers applicatifs
Fichier   | Définition
---       | ---
app/app.component.{ts,html,css,spec.ts} | Composant racine qui deviendra un arbre de composants imbriqués au fur et à mesure que l'application évolue
app/app.module.ts                       | Module racine qui indique à Angular l'ensemble des éléments qui forme l'application
assets/*                                | Dossier contenant les ressources statiques et externes
environments/*                          | Dossier contenant un fichier pour chaque environnement avec une variable de configuration. Les fichiers sont chargés à la volée
favicon.ico                             | Icône de la barre de favoris
index.html                              | Page HTML principale et unique de l'application. Angular CLI ajoute automatiquement le CSS/Javascript à la page
main.ts                                 | Point d'entrée de application. Lance la compilation et amorce le module racine (AppModule) pour l'exécuter dans le navigateur
polyfills.ts                            | Ce sont des bibliothèques JavaScript destinées à émuler des fonctionnalités qui ne sont pas encore implémentées nativement dans les navigateurs
test.ts                                 | Point d'entrée pour lancer les tests unitaires
tsconfig.{app|spec}.json                | Configuration du compilateur typscript de l'application pour le dev et les tests unitaires

### Dossier racine --> fichiers pour le packaging, test et deploiment
Fichier   | Définition
---       | ---
e2e/                | Dossier pour les tests de bout en bout
node_modules/       | Dossier crée par Node.js dans lequel se trouvent tous les modules tiers listés dans le package.json
.angular-cli.json   | Configuration Angular CLI
.gitignore          | Configuration git pour ignorer les fichiers généres automatiquement
.karma.conf.js      | Configuration des tests unitaires
.package.json       | Metadonnées de l'application et configuration des modules tiers dont dépend l'application
.protractor.conf.js | Configuration des tests de bout en bout
tsconfig.json       | Configuration du compilateur typescript de l'IDE
tslint.json         | Configuration de l'audit de code typescript pour garder un code cohérent