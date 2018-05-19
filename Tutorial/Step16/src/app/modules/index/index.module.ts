import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules/shared/shared.module';

// Components
import { IndexComponent } from './components/index.component';

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
        IndexComponent
    ],
    providers: []
})
export class IndexModule { }
