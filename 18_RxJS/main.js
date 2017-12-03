// On récupere un Observable de la librairie RxJS
let Observable = Rx.Observable;

//#region Création d'un Observable
// On va créer un Observable
// Pour indiquer que c'est Observale on met souvent $ a la fin
// Il prend en parametre une fonction qui elle meme prend un objet Observer
// Cet Observer comporte des methodes importante comme nextm error
let values$ = Observable.create((observer) => {
    // Methode next permet de pousser les données
    // Une fonction retourne q'une seule valeur
    // Un observer peut pousser valeurs supplementaire
    observer.next("Hello");
    observer.next("World");
    // Il peut pousser un asynchrone
    setTimeout(() => {
        console.log("Coucou asynchrone");
    }, 3000);

    try {
        // on appelle la methode error pour informer qu'une erreur s'est produite
        throw Error("Boom");
        // on appelle la methode complete pour passer la main a un autre par exemple
        observer.complete();
    } catch (e) {
        // on appelle la methode error de l'observer a la place de next
        observer.error(e);
    }
});

// Une fois qu'on a un Observale
// On va s'abonner a cet Observable
// La methode subscribe prend 3 handlers (callback) en parametre
values$.subscribe(
    // data handler: permet de recevoir les données
    (data) => console.log(data),
    // error handler: l'Observable infome qu'une s'est produite
    (error) => console.error(error),
    // complete handler: l'Observable informe qu'il n'a plus de données à retourner
    () => console.log("complete")
)

// Observer <=> Generateur ES6
function* fruits() {
    yield "pommes";
    yield "bananes";
    yield "fraises";
}
let iterateur = fruits();
// Seule Diff avec l'Observer --> le consommateur tire les données
console.log(iterateur.next().value);
console.log(iterateur.next().value);
console.log(iterateur.next().value);
//#endregion

//#region Operateurs de création d'observables of() from()
// On peut créer un Observable directement en passant les données en parametres
let values2$ = Observable.of("Hello", "World");
values2$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);

// On peut créer un Observable directement à partir des données
let array = ["pommes", "fraises"];
let values3$ = Observable.from(array);
values3$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);

// On peut créer un Observable à partir d'une promesse
let url = "https://api.github.com/emojis";
// Requete ajax avec jQuery
// La methode getJSON retourne une promesse
let values4$ = Observable.from($.getJSON(url));
values4$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);
//#endregion

//#region Operators interval(), timer(), take(), map(), do()

// interval: si on produire des valeurs numerique qui s'incrémente toute les secondes 
let intervals$ = Observable.interval(500);

// map modifie la donnée produite par interval et timer
let map$ = Observable.interval(500)
    .map(x => x * 10);

// take    
let take$ = Observable.interval(500)
    .map(x => x * 10)
    .take(10);

// timer
let timer$ = Observable.timer(3000, 500)
    .map(x => x * 10)
    .take(10);

// do: permet d'informer sur une valeur a l'instant t (pas de transformation de données)
// pas mal pour debuguer
let phrase = "test";
let do$ = Observable.timer(3000, 500)
    .do(x => console.log("avant map", x))
    .map(x => phrase[x]) // données de timer transformées par map
    .do(x => console.log("après map", x))
    .take(phrase.length);

do$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);
//#endregion

//#region Combinaison de flux
// peut etre utile pour des applications de calculs de rapports qualité/prix, poids/puissance ...
let slowNums$ = Observable.interval(1000);
let fastNums$ = Observable.interval(200);

let combined$ = slowNums$.combineLatest(fastNums$, (s, f) => s + ' ' + f)
    .take(20);
combined$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);
//#endregion