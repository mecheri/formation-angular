import { NgModule } from '@angular/core';

// ----------------------------------------
// import { SharedModule } from '../shared/shared.module';
// OU
// DemoModule importe CommonModule, pas BrowserModule.
// Les Components/Directives/Pipes d'un module de fonctionnalité ont besoin des directives Angular communes
// Mais pas du modules BrowserModule qui prend en charge le bootrstraping de l'appli.
import { CommonModule } from '@angular/common';

// DemoModule importe le FormsModule car ses futurs Components/Directives/Pipes utiliseront NgModel,
// Une des directives principales FormsModule.
import { FormsModule } from '@angular/forms';
// ----------------------------------------

// DemoModule n'hérite pas de l'accès aux déclarations du modules racine ou de tout autre NgModule.
// Chaque NgModule doit importer ce dont il a besoin.

// Un Component peut seulement être déclaré dans un seul NgModule.
// DemoExampleComponent ne peut être déclaré dans un autre module
import { DemoExampleComponent } from './demo-example.component';

// DemoService appartient au domaine du DemoModule.
// Les classes dans le reste de l'application n'ont pas besoin de DemoService et ne doivent pas l'injecter.
// Mais réelement, n'importe quelle classe peut injecter le service DemoService,
// car les Providers de DemoModule ont la portée de la racine
// car Angular enregistre tous les Providers NgModule avec l'injecteur racine de l'application
import { DemoExampleService } from './demo-example.service';

// DemoModule a son propre module de routage qui lui export le RouterModule d'Angular
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ],
  declarations: [
    DemoExampleComponent
  ],
  providers: [
    DemoExampleService
  ]
})
export class DemoModule { }
