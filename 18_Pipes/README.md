# Pipes
* Un Pipe prend en entrée des données et les transforme en une sortie désirée
* C'est une "display-value transformations" déclarées directement au niveau HTML
* Angular fournit des Pipes comme: DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe et PercentPipe
* Angular ne fournit pas FilterPipe et OrderByPipe
* L'algorithme de "Change Detection" s'éxecute de manière plus optimisée avec les Pipes

## Custom Pipes
* Un Pipe est une classe décorée de @Pipe
* La classe Pipe implémente l'interface PipeTransform