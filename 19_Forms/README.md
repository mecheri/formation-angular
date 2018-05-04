# Forms

## Template-driven forms (Formulaire basé sur le Template)
* FormsModule de @angular/forms
* Formulaire orienté HTML via des directives Angular dédiées
* Formulaire asynchrones --> la création des côntroles est faite par les Directives

## NgForm
* NgForm est une directive spéciale ajoutée automatiquement quand Agular parse une balise "form" dans une vue
* Elle complète l'élément de formulaire avec des fonctionnalités supplémentaires (contrôles et validation des propriété bindées).
* L'attribut "name" est obligatoire lors de l'utilisation de "[(ngModel)]" en combinaison avec un formulaire
* En interne, Angular crée une instance "FormControl" pour chaque élément avec un attribut "name" à l'interieur d'un formulaire.
* L'utilisation de ngModel dans un formulaire permet de vérifier si les valeurs sont valides grace aux statuts de contrôle:
    - ng-touched / ng-untouched (oui/non) --> Champ visité
    - ng-dirty   / ng-pristine  (oui/non) --> Changement de valeur 
    - ng-valid   / ng-invalid   (oui/non) --> Valeur non valide

## Reactive Forms (Formulaires réactifs)
* ReactiveFormsModule de @angular/forms
* Formulaire orienté Component avec une gestion explicite des données
* La structure et les objets de côntrole du formulaire sont construit coté code dans la classe des Components
* Avantages:
    - Plus de maîtrise des objets de côntrole
    - Plus facile à tester
    - Le Template représente uniquement une source de données --> préserve l'immuabilité du Template (moins de manipulations du DOM)
* Classes principales:
    - "AbstractControl": classe abstraite de base pour les trois classes de contrôle de formulaire: FormControl, FormGroup, FormArray
    - "FormControl": suit la valeur et l'état de validité d'un contrôle individuel. Il correspond à un contrôle de formulaire HTML tel qu'une zone de saisie ou un sélecteur.
    - "FormGroup": suit la valeur et l'état de validité d'un groupe d'instances AbstractControl.
    - "FormArray": suit la valeur et l'état de validité d'un tableau indexé numériquement des instances de AbstractControl.
    - "FormBuilder" permet de réduire la répétition lors de la création de contrôle.
    - "Validators" : valident la saisie de l'utilisateur pour plus de précision. Angular fournit des validateurs intégrés https://angular.io/api/forms/Validators. On peut aussi construire des "Custom Validators"

## Custom Form Validation (Validation formulaire)
Voir exemple