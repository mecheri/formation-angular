- [Site officiel](https://cli.angular.io/)

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