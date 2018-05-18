import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

/**
 * Event Interface
 *
 * @interface Event
 */
interface Event {
    key: any;
    data?: any;
}

/**
 * Event service
 *
 * @export
 * @class EventService
 */
export class EventService {
    private eventBus: Subject<Event>;

    /**
     * Creates an instance of EventService.
     * @memberof EventService
     */
    constructor() {
        this.eventBus = new Subject<Event>();
    }

    /**
     * Broadcast event
     *
     * @param {*} key
     * @param {*} [data]
     * @memberof EventService
     */
    broadcast(key: any, data?: any) {
        this.eventBus.next({ key, data });
    }

    /**
     * Listen event
     *
     * @template T
     * @param {*} key
     * @returns {Observable<T>}
     * @memberof EventService
     */
    on<T>(key: any): Observable<T> {
        return this.eventBus.asObservable()
            .filter(event => event.key === key)
            .map(event => <T>event.data);
    }
}