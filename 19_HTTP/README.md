# Http
* Les applications Font-end communiquent avec les services backend via le protocole HTTP. 
* Les navigateurs proposent 2 API différentes pour effectuer des requêtes HTTP: 
    - l'interface XMLHttpRequest --> https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
    - l'API fetch()              --> https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
## HttpClient
* HttpClient d'Angular fournit une API pour la fonctionnalité HTTP, en s'appuyant sur l'interface XMLHttpRequest des navigateurs
* Les avantages HttpClient: 
    - Le typage fort des objets de requête et de réponse, 
    - Le support des intercepteurs de requêtes et de réponses 
    - Meilleure gestion des erreurs via les API basés sur Observables.
```typescript
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
})
```
### Intercepter toutes les requêtes et réponses
* Un intercepteur HttpClient d'Angular, est une classe qui implémente HttpInterceptor, qui a une seule méthode intercept()
* Très utile pour l'authentification, la journalisation et même la gestion des erreurs Http
* La méthode intercept transforme une requête en un observable qui retourne finalement la réponse
* La plupart du temps, les intercepteurs apporteront des modifications mineures à la requête 
* Le paramètre next est un HttpHandler, similaire à l'interception, transforme une requête en observable pour la réponse
* Next représente le prochain intercepteur dans la chaîne, ou le backend final s'il n'y a plus d'intercepteurs
* Un intercepteur peut être assimilé un middelware

#### Enregistrer l'intercepteur dans la DI d'Angular
```typescript
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: DemoInterceptor,
    multi: true,
  }],
})
export class AppModule {}
```
* L'option multi: true, indique à Angular que HTTP_INTERCEPTORS est un tableau de valeurs, plutôt qu'une seule valeur
* L'Observable renvoyé par interception n'est pas un Observable de HttpResponse mais un HttpEvent
* Parce que les intercepteurs fonctionnent à un niveau inférieur à celui de l'interface HttpClient
* Une seule requête peut générer plusieurs événements (événements de progression de téléchargement par exemple) 
* Si plusieurs intercepteurs sont enregistrés, Angular les applique dans l'ordre d'enrgistrement. 
* Les intercepteurs transforment les requêtes et les réponses mais les classes qui les representent HttpRequest et HttpResponse sont immuables.
* L'immutabilité garantit que les intercepteurs voient la même demande à chaque essai.
* Dans le cas où le corps de la requête doit être modifié, il faut cloner la requête, puis faire muter la copie
```typescript
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  // Copie 
  const dupReq = req.clone();
  // replacement de 'http://' with 'https://'
  const secureReq = req.clone({url: req.url.replace('http://', 'https://')});
}
```
* Un intercepteur peut modifier les Headers indispensable dans certains cas:
  - Authentification
  ```typescript
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authReq = req.clone({headers: req.headers.set('Authorization', 'valeur du token authentification')});
      return next.handle(authReq);
    }
  ```
  - Logger des informations avant/après requête
  ```typescript
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const started = Date.now();
      return next.handle(req)
        .do(event => Date.now() - started);
    }
  ```
  - Gestion du cache
  - Gestion de la protection XSRF