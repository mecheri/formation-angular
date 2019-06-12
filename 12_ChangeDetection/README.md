# Change Detection

La détection de changement consiste à prendre l’état interne d’un programme et à le rendre visible à l’interface utilisateur. Cet état peut être n'importe quel structure de données javascript: objet, tableau, primitif ...


## Model / DOM / Rendering

* Cet état du programme javascript (modèle ou structure de données) est représenté coté navigateur (interface utilisateur) via le DOM (Document Object Model).
* Le mécanisme qui consiste à prendre des structures de données en entrée et générer une sortie DOM pour l'afficher à l'utilisateur, est appelé processus de rendu.
<p align="center">
    <img src="https://github.com/mecheri/formation-angular/blob/master/resources/images/model-dom.png" width="600" height="400" style="display:block;margin: 0 auto;">
</p>


## Data Mutation

* Une valeur immuable est une valeur qui, une fois créée, ne doit jamais être modifiée -> conserve l'élément d'origine inchangé à tout moment
* En javascript, les types primitifs tels que number, string et boolean sont toujours immuables, par contre d'autres structures comme les objets, les tableaux sont mutables

    ```javascript
    var str = "test";
    str.slice(1, 3);
    console.log(str); // affiche test --> strings sont immuables

    str2 = str.slice(1, 3); // crée une nouvelle copie
    console.log(str2); // affiche es

    var arr = [1, 2];
    arr.push(3); // cette méthode ne retourne pas une nouvelle copie mais transforme l'original arr
    console.log(arr); // affiche [1, 2, 3]
    ```


## Angular Change Detection

* Les changements sont déclenchés par:
    - Events - click, submit, ...
    - XHR - Récupération des données d'un serveur distant
    - Timers - setTimeout(), setInterval()

* La propagation se fait en 2 phases:
    1. Phase d'application:
        - L'application est responsable de la mise à jour du modèle
    2. Phase de detection du changement:
        - Le mécanisme de détection des changements commence au niveau du composant racine pour parcourir tous les composants de l’arbre, même s’ils ne semblent pas s’être modifiés
        - Après avoir détecté que certaines modifications des propriétés liées au modèle ont été modifiées, le DOM sera donc mis à jour pour que la vue soit synchronisée avec le modèle

<p align="center">
    <img src="https://github.com/mecheri/formation-angular/blob/master/resources/images/change-detection.png" width="800" height="400" style="display:block;margin: 0 auto;">
</p>


## Change Detection Strategy
* Angular propose 2 stratégies
    1. Défaut
        - La transformation (mutation) d'une structure de données (objet, tableau...) déclenche le mécanisme de change detection
        ```javascript
        var arr = [1, 2];
        arr.push(3);
        ```
    2. OnPush
        - La transformation (mutation) d'une structure de données (objet, tableau...) ne déclenche pas le mécanisme de change detection
        - Ce dernier est déclenché uniquement si une nouvelle réference de la structure est créée
        ```javascript
        var arr = [1, 2];
        arr = arr.concat(3);
        ```