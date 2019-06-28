# [Reactive programming](http://reactivex.io/)
* La programmation reactive permet de gérer des flux données (valeurs, requêtes asynchrone, animations) qui arrivent dans le temps

## RxJS
* Une librairie javascript qui permet de retourner des données de manière synchrone ou asynchrone
* Repose sur les "Observables" et les "Operators"

## Observables
* Un Observables permet de transmettre des données entre émetteurs et abonnés dans une application javascript
* Les Observables offrent des avantages par rapport aux autres techniques de gestion des événements, de programmation asynchrone, et de fournisseurs de données

## Observables vs Promises
* Les Observables sont déclaratifs, le calcul ne commence que si un consommateur s'y abonne. Les promesses s'exécutent immédiatement lors de la création
* Les Observables fournissent de nombreuses valeurs dans le temps. Les promesses en fournissent une
* Les Observables différencient chaînage et abonnement. Les promesses n'ont que des clauses .then()
* Les abonnements à des Observables sont annulables. Le désabonnement supprime les valeurs supplémentaires et avertit pour annuler le travail. Les promesses ne le sont pas

## Observables vs Events API
* Les Observables sont très similaires aux gestionnaires d'événements
* L'abonnement à un Observables équivaut à ajouter un listner d'événement
* La seule différence est qu'on peut configurer un Observable pour transformer un événement avant l'éxécution de son contenu