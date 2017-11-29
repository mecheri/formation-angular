import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class InteractionsService {

    // Observable string sources
    private broadcastParentSource = new Subject<string>();
    private broadcastChildSource = new Subject<string>();

    // Observable string streams
    broadcastParentStream$ = this.broadcastParentSource.asObservable();
    broadcastChildStream$ = this.broadcastChildSource.asObservable();

    broadcastParent(data: string) {
        this.broadcastParentSource.next(data);
    }

    broadcastChild(data: string) {
        this.broadcastChildSource.next(data);
    }
}