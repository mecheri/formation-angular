# Reactive programming
* La programmation reactive permet de gérer des flux données (valeurs, requêtes asynchrone, animations) qui arrivent dans le temps

## RxJS
[RxJS](http://reactivex.io/)
* Une librairie javascript qui permet de retourner des données de manière synchrone ou asynchrone
* Repose sur les "Observables" et les "Operators"

## Observables
* Un Observable permet de transmettre es données entre émetteurs et abonnés dans une application javascript
* Les observables offrent des avantages par rapport aux autres techniques de gestion des événements, de programmation asynchrone, et de fournisseurs de données

## Observables vs Promises
* Les observables sont déclaratifs, le calcul ne commence que si un consommateur s'y abonne. Les promesses s'exécutent immédiatement lors de la création
* Les observables fournissent de nombreuses valeurs dans le temps. Les promesses en fournissent une
* Les observables différencient chaînage et abonnement. Les promesses n'ont que des clauses .then()
* Les abonnements à des observables sont annulables. Le désabonnement supprime les valeurs supplémentaires et avertit pour annuler le travail. Les promesses ne le sont pas
* Les erreurs d'exécution pour les observables sont transmises au gestionnaire d'erreurs de l'abonné et qui se désinscrit l'observable. Les promesses poussent les erreurs aux promesses de l'enfant

## Observables vs Events API
* Les observables sont très similaires aux gestionnaires d'événements
* L'abonnement à un observable équivaut à ajouter un listner d'événement
* La seule différence est qu'on peut configurer un observable pour transformer un événement avant l'éxécution de son contenu