let Observable = rxjs.Observable;
let of = rxjs.of;
let from = rxjs.from;
let delay = rxjs.operators.delay;
let map = rxjs.operators.map;
let mergeAll = rxjs.operators.mergeAll;
let mergeMap = rxjs.operators.mergeMap;
let flatMap = rxjs.operators.flatMap;
let switchMap = rxjs.operators.switchMap;
let concatMap = rxjs.operators.concatMap;

const getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
    )
}

// using a regular map
from([1, 2, 3, 4]).pipe(
    map(param => getData(param))
).subscribe(val => // Outer Observable
    val.subscribe(data => console.log(data)) // Inner Observable
);

// // using map and mergeAll
// from([1, 2, 3, 4]).pipe(
//     map(param => getData(param)),
//     mergeAll()
// ).subscribe(val => console.log(val));

// // using mergeMap
// from([1, 2, 3, 4]).pipe(
//     mergeMap(param => getData(param))
// ).subscribe(val => console.log(val));

// // using flatMap alias of mergeMap
// from([1, 2, 3, 4]).pipe(
//     mergeMap(param => getData(param))
// ).subscribe(val => console.log(val));

// // using switchMap
// // cancels the previous subscription in the inner observable and subscribes to the new one
// from([1, 2, 3, 4]).pipe(
//     switchMap(param => getData(param))
// ).subscribe(val => console.log(val));

// // using concatMap
// // concatMap will not subscribe to the next Observable until the current one completes
// // The benefit of this is that the order in which the Observables are emitting is maintained
// from([1, 2, 3, 4]).pipe(
//     concatMap(param => getData(param))
// ).subscribe(val => console.log('concatMap:', val));