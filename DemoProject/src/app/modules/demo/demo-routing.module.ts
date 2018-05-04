import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { DemoExampleComponent } from "./demo-example.component";

const routes = [
  { path: '', component: DemoExampleComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {}