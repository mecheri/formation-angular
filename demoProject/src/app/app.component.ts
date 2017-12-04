import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { InteractionsComponent } from './training/components/interactions/interactions.component';
import { InteractionsService } from './training/components/interactions/interactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InteractionsService]
})
export class AppComponent implements OnInit, AfterViewInit {
  //#region Components
  // Two-way bindings 1
  prop = 1;

  // Two-way bindings 2
  fontSizePx = 10;

  // Life cycle hooks
  id = 1;
  label = "test";

  // Interactions
  interEx = 3;
  interCode = "A";
  interLabel = "test";
  interSetter = "    qsdsdqsd";
  interAccept = "";
  interOnAccept = (accept: boolean): void => {
    this.interAccept = accept ? "Oui" : "Non";
  }
  @ViewChild(InteractionsComponent)
  private interactionsComponent: InteractionsComponent;
  interViewChild = "";
  ngAfterViewInit() {
    if (this.interactionsComponent) {
      this.interViewChild = this.interactionsComponent.hello;
    }
  }

  dataFromParent = "data from parent";
  dataFromChild = "";
  constructor(
    private http: HttpClient,
    private interService: InteractionsService) {
    interService.broadcastChildStream$.subscribe(
      dataFromChild => {
        this.dataFromChild = dataFromChild;
      }
    );
  }
  broadcastParent() {
    this.interService.broadcastParent(this.dataFromParent);
  }
  //#endregion

  //#region Directives
  directive = {
    array: ['A', 'B', 'C'],
    code: 'B'
  }
  //#endregion

  //#region Pipes
  dateAnniv = new Date(1988, 1, 12);
  dateFormat = "MM/dd/yy";
  exponent = "";
  //#endregion

  //#region Forms
  onKey(event: any) {
    console.log(event.target.value);
  }
  onKeyWithType(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value);
  }
  onKeyWithRef(value: string) {
    console.log(value);
  }
  onEnter(value: string) {
    console.log(value);
  }
  //#endregion

  //#region HttpClient
  ngOnInit(){}
  // results: string[];
  // ngOnInit(): void {
  //   // Récupération de données JSON
  //   this.http.get('https://api.github.com/emojis')
  //     .subscribe(data => {
  //       console.log(data['hugs']);
  //     });

  //   // Vérification du type de la réponse
  //   interface EmojisResponse {
  //     hugs: string;
  //   }
  //   this.http.get<EmojisResponse>('https://api.github.com/emojis')
  //     .subscribe(data => {
  //       console.log(data.hugs);
  //     });

  //   // Récupération de la totalité de la réponse pas le body uniquement
  //   this.http.get<EmojisResponse>('https://api.github.com/emojis', { observe: 'response' })
  //     .subscribe(resp => {
  //       console.log(resp);
  //     });

  //   // Gestion des erreurs
  //   this.http.get('https://api.github.com/emojisqsd')
  //     .subscribe(
  //     data => console.log(data),
  //     error => console.log('Erreur http -->', error)
  //     );

  //   // Récupération de données non-JSON
  //   this.http.get('file.txt', { responseType: 'text' })
  //     .subscribe(data => {
  //       console.log(data);
  //     });

  //   // Envoyer des données a un serveur
  //   // Requete POST
  //   const body = { name: 'Mehdi' };
  //   this.http
  //     .post('/api/users/add', body)
  //     .subscribe(
  //     data => console.log(data),
  //     error => console.log('Erreur http -->', error)
  //     );
  //   // Headers
  //   this.http
  //     .post('/api/users/add', body, {
  //       headers: new HttpHeaders().set('Authorization', 'auth-token'),
  //     })
  //     .subscribe();

  //   // URL Parameters  
  //   this.http
  //     .post('/api/users/add', body, {
  //       params: new HttpParams().set('id', '3'),
  //     })
  //     .subscribe();
  // }
  //#endregion
}
