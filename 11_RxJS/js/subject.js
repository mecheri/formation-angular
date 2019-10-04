let rxjs = require('rxjs');
let operators = require('rxjs/operators');

// Subject
// Un Subject est à la fois un observable ET un observer. 
// On peut donc subscribe dessus, mais également lui envoyer des valeurs
const subject = new rxjs.Subject();
subject.subscribe(x => console.log(x));
subject.next(1);
subject.next(2);


// BehaviorSubject
// Un BehaviorSubject a obligatoirement une valeur par défaut. 
// Il sauvegarde la dernière valeur qu'il a émis et l'envoie aux observateurs lors de leur subscribe
const subjectBh = new rxjs.BehaviorSubject(0);
subjectBh.next(1);
subjectBh.next(2);
subjectBh.subscribe(x => console.log(x));