let Observable = rxjs.Observable;
let of = rxjs.of;
let from = rxjs.from;
let BehaviorSubject = rxjs.BehaviorSubject;
let delay = rxjs.operators.delay;
let map = rxjs.operators.map;
let switchMap = rxjs.operators.switchMap;

const filters = ['marque=bmw', 'model=z4', 'chv=389', 'couleur=rouge']
const activeFilters = new BehaviorSubject('');

const getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
    )
}

const applyFilters = () => {
    filters.forEach((filter, index) => {

        let newFilters = activeFilters.value;
        if (index === 0) {
            newFilters = `?${filter}`
        } else {
            newFilters = `${newFilters}&${filter}`
        }

        activeFilters.next(newFilters)
    })
}

// using switchMap
activeFilters.pipe(
    switchMap(param => getData(param))
).subscribe(val => console.log(val));

applyFilters()