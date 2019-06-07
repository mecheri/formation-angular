import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

// Components
import { IndexComponent } from './index.component';

// Routing Module
import { IndexRoutingModule } from "./index-routing.module";

@NgModule({
    imports: [
        SharedModule,
        IndexRoutingModule
    ],
    declarations: [
        IndexComponent
    ],
    exports: [
        SharedModule
    ],
    providers: []
})
export class IndexModule { }
