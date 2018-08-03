// On récupere un Observable de la librairie RxJS
let Observable = rxjs.Observable;
let of = rxjs.of;
let from = rxjs.from;
let interval = rxjs.interval;
let timer = rxjs.timer;
let combineLatest = rxjs.combineLatest;
let map = rxjs.operators.map;
let take = rxjs.operators.take;
let tap = rxjs.operators.tap;

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
let values2$ = of("Hello", "World");
values2$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);

// On peut créer un Observable directement à partir des données
let array = ["pommes", "fraises"];
let values3$ = from(array);
values3$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);

// On peut créer un Observable à partir d'une promesse
let url = "https://api.github.com/emojis";
// Requete ajax avec jQuery
// La methode getJSON retourne une promesse
let values4$ = from($.getJSON(url));
values4$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);
//#endregion

//#region Operators interval(), timer(), take(), map(), do()

// interval: si on produire des valeurs numerique qui s'incrémente toute les secondes 
let intervals$ = interval(500);
intervals$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);

// map modifie la donnée produite par interval et timer
let map$ = interval(500)
    .pipe(map(x => x * 10));
map$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);

// take    
let take$ = interval(500)
    .pipe(
        map(x => x * 10),
        take(10)
    );
take$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);

// timer
let timer$ = timer(3000, 500)
    .pipe(
        map(x => x * 10),
        take(10)
    );
timer$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);

// tap: permet d'informer sur une valeur a l'instant t (pas de transformation de données)
// pas mal pour debuguer
let phrase = "test";
let tap$ = timer(3000, 500)
    .pipe(
        tap(x => console.log("avant map", x)),
        map(x => phrase[x]), // données de timer transformées par map
        tap(x => console.log("après map", x)),
        take(phrase.length)
    );
tap$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);
//#endregion

//#region Combinaison de flux
// peut etre utile pour des applications de calculs de rapports qualité/prix, poids/puissance ...
let slowNums$ = interval(1000);
let fastNums$ = interval(200);

let combined$ = combineLatest(slowNums$, fastNums$, (s, f) => s + ' ' + f)
    .pipe(take(20));
combined$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => console.log("complete")
);
//#endregion