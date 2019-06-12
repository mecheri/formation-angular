// //----------------------------------
// //#region Création d'un Observable
// // On récupere un Observable de la librairie RxJS
// let Observable = rxjs.Observable;

// let obsvbl$ = Observable.create((observer) => {
//     // Methode next permet de pousser les données
//     // Une fonction retourne qu'une seule valeur
//     // Un observer peut pousser des valeurs supplementaires
//     observer.next("Hello");
//     observer.next("World");

//     // Il peut pousser en mode asynchrone
//     setTimeout(() => {
//         console.log("Coucou asynchrone");
//     }, 3000);

//     try {
//         // on appelle la methode error pour informer qu'une erreur s'est produite
//         throw Error("Boom");
//         // on appelle la methode complete pour passer la main a un autre par exemple
//         observer.complete();
//     } catch (e) {
//         // on appelle la methode error de l'observer au lieu de next
//         observer.error(e);
//     }
// });

// // Une fois qu'on a un Observale
// // On va s'abonner a cet Observable => Si on ne s'abonne pas, on aura jamais les données (fonctionnement lazy)
// // La methode subscribe prend 3 handlers (callback) en parametre
// obsvbl$.subscribe(
//         // data handler: permet de recevoir les données
//         (data) => console.log(data),
//         // error handler: l'Observable infome qu'une erreur s'est produite
//         (error) => console.error(error),
//         // complete handler: l'Observable informe qu'il n'a plus de données à retourner
//         () => console.log("complete")
//     );
// //#endregion
// //----------------------------------


// //----------------------------------
// //#region Observer <=> Generateur ES6
// function* fruits() {
//     yield "pommes";
//     yield "bananes";
//     yield "fraises";
// }
// let iterateur = fruits();
// // Seule diff avec l'Observer --> c'est au consommateur de tirer les données
// console.log(iterateur.next().value);
// console.log(iterateur.next().value);
// console.log(iterateur.next().value);
// //#endregion
// //----------------------------------


// //----------------------------------
// //#region Operateurs de création d'observables of()
// let of = rxjs.of;
// let of$ = of("Hello", "World");
// of$.subscribe(
//     (data) => console.log(data),
//     (error) => console.error(error),
//     () => console.log("complete")
// );
// //#endregion
// //----------------------------------


// //----------------------------------
// //#region Operateurs de création d'observables from()
// let from = rxjs.from;
// let array = ["pommes", "fraises"];
// let from$ = from(array);
// from$.subscribe(
//     (data) => console.log(data),
//     (error) => console.error(error),
//     () => console.log("complete")
// );
// On peut créer un Observable à partir d'une promesse
// Requete ajax avec jQuery
// La methode getJSON retourne une promesse
// let url = "https://api.github.com/emojis";
// let from$ = from($.getJSON(url));
// from$.subscribe(
//     (data) => console.log(data),
//     (error) => console.error(error),
//     () => console.log("complete")
// );
// //#endregion
// //-----------------------------------


// //-----------------------------------
// //#region Operateurs de création d'observables interval()
// let interval = rxjs.interval;
// let interval$ = interval(500);
// interval$.subscribe(
//     (data) => console.log(data),
//     (error) => console.error(error),
//     () => console.log("complete")
// );
// //#endregion
// //----------------------------------


// //----------------------------------
// //#region Operators map(), timer(), take(), tap()
// // interval: si on produire des valeurs numerique qui s'incrémente toute les secondes
// let interval = rxjs.interval;
// let map = rxjs.operators.map;
// let take = rxjs.operators.take;
// let tap = rxjs.operators.tap;

// // map modifie la donnée produite par interval et timer
// let map$ = interval(500)
//     .pipe(map(x => x * 10));
// map$.subscribe(
//     (data) => console.log(data),
//     (error) => console.error(error),
//     () => console.log("complete")
// );

// // take
// let take$ = interval(500)
//     .pipe(
//         map(x => x * 10),
//         take(10)
//     );
// take$.subscribe(
//     (data) => console.log(data),
//     (error) => console.error(error),
//     () => console.log("complete")
// );

// // timer
// let timer = rxjs.timer;
// let timer$ = timer(3000, 500)
//     .pipe(
//         map(x => x * 10),
//         take(10)
//     );
// timer$.subscribe(
//     (data) => console.log(data),
//     (error) => console.error(error),
//     () => console.log("complete")
// );

// // tap: permet d'informer sur une valeur a l'instant t (pas de transformation de données)
// // pas mal pour debuguer
// let phrase = "test";
// let tap$ = timer(3000, 500)
//     .pipe(
//         tap(x => console.log("avant map", x)),
//         map(x => phrase[x]), // données de timer transformées par map
//         tap(x => console.log("après map", x)),
//         take(phrase.length)
//     );
// tap$.subscribe(
//     (data) => console.log(data),
//     (error) => console.error(error),
//     () => console.log("complete")
// );
// //#endregion
// //---------------------------


// //---------------------------
// //#region Combinaison de flux
// // peut etre utile pour des applications de calculs de rapports qualité/prix, poids/puissance ...
// let combineLatest = rxjs.combineLatest;
// let slowNums$ = interval(1000);
// let fastNums$ = interval(200);

// let combined$ = combineLatest(slowNums$, fastNums$, (s, f) => s + ' ' + f)
//     .pipe(take(20));
// combined$.subscribe(
//     (data) => console.log(data),
//     (error) => console.error(error),
//     () => console.log("complete")
// );
// //#endregion
// //----------------------------