# Tuto Steps

## Required tools
- [Git](https://git-scm.com/)
 ```bash
 # git behind proxy
 git config --global http.proxy http://proxy-host:port
 git config --global https.proxy http://proxy-host:port

 # check the currently set proxy
 git config --global --get http.proxy
 git config --global --get https.proxy
 ```
 - [Node.js](https://nodejs.org/)
 ```bash
 # npm behind proxy
 npm config set proxy http://proxy-host:port
 npm config set https-proxy http://proxy-host:port
 npm config set registry http://registry.npmjs.org/
 npm config set strict-ssl false

 # check the currently set proxy
 npm config get proxy
 npm config get https-proxy
 npm config get registry
 npm config get strict-ssl
 ```
 - [Angular CLI](https://cli.angular.io/)
 ```bash
 # if not installed yet
 npm install -g @angular/cli

 # if already installed
 npm uninstall -g @angular/cli
 npm cache verify
 npm install -g @angular/cli@8.0.0
 ```
## 00. [Step01] Generating an Angular project
<details>
  <summary>Click to expand!</summary>
  
```bash
ng new MY-PROJECT-NAME --style=scss

Would you like to add Angular routing? N
```
</details>

## 01. [Step02] Initial configuration (Packages / Styles / Fonts)
<details>
  <summary>Click to expand!</summary>
  
- Remove src/styles.scss file
- Copy formation-angular/resources/styles directory to /src
- Copy formation-angular/resources/fonts directory to /src/assets
- Set up this as styles property in angular.json file:
    ```javascript
    "styles": [
        "src/styles/app.scss"
    ],
    ```
- Install ngx-materialize:
    ```bash
    npm install --save ngx-materialize
    ```
- Install jquery (ngx-materialize needs jquery)
    ```bash
    npm install --save jquery
    ```
- Install primeng and it's icons
    ```bash
    npm install --save primeng primeicons
    ```
- Install @angular/cdk (Component Dev Kit: Angular Material Abstraction used by primeng) 
    ```bash
    npm --save install @angular/cdk
    ```
- Set the following as scripts property in angular.json file:
    ```javascript
    "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/materialize-css/dist/js/materialize.min.js"
    ]
    ```
</details>

## 02. [Step03] User component
<details>
  <summary>Click to expand!</summary>
  
- Generate UserComponent
    ```bash
    ng generate component user
    ```
- Update the AppComponent template
    ```html
    <!-- path: src/app/app.component.html -->

    <div style="text-align:center">
        <h1>
            Welcome to {{ title }}!
        </h1>
        <img width="100" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>

    <app-user></app-user>
    ```
- Create User Model class:
    ```bash
    ng generate class user/user
    ```
    ```typescript
    // path: src/app/user/user.ts

    export class User {
        id: number;
        username: string;
        password: string;
        email: string;
        firstname: string;
        lastname: string;
        birthdate?: Date;
    }
    ```
- Display the user object:
    ```typescript
    // path: src/app/user/user.component.ts

    user: User = {
        id: 1,
        username: 'test',
        password: 'pa$$word',
        email: 'mehdi.mecheri@viveris.fr',
        firstname: 'Mehdi',
        lastname: 'Mecheri',
        birthdate: new Date(2018, 5, 22)
    };
    dateFormat = "MM/dd/yy";
    image = 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f471-1f3fb.png';
    ```
    ```html
    <!-- path: src/app/user/user.component.ts -->

    <div style="text-align:center">
        <!-- One-way binding: property (to-the-dom) -->
        <img width="100" alt="property as one-way binding" [src]="image">
        <!-- One-way binding: interpolation (to-the-dom) -->
        <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
        <div><span>id: </span>{{user.id}}</div>
        <div><span>email: </span>{{user.email}}</div>
        <div><span>birth date: </span>{{user.birthdate}}</div>
    </div>
    ```
- One-way binding: interpolation (to-the-dom)
- One-way binding: property (to-the-dom)
- Apply some of Angular's standard pipes:
    ```html
    <!-- path: src/app/user/user.component.html -->

    <div><span>birth date: </span>{{user.birthdate | date}}</div>
    <div><span>birth date: </span>{{user.birthdate | date: "MM/dd/yy"}}</div>
    <div><span>birth date: </span>{{user.birthdate | date: dateFormat}}</div>
    <div><span>birth date: </span>{{user.birthdate | date | uppercase}}</div>
    ```
- Generate and apply custom pipe:
    ```bash
    ng generate pipe exponential
    ```
    ```typescript
    // path: src/app/exponential.pipe.ts

    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
        name: 'exponential'
    })
    export class ExponentialPipe implements PipeTransform {
        transform(value: number, exponent: string): number {
            let exp = parseFloat(exponent);
            return Math.pow(value, isNaN(exp) ? 1 : exp);
        }
    }
    ```
    ```html
    <!-- path: src/app/user/user.component.html -->

    <div>Exponentielle: {{2 | exponential: 2}}</div>
    ```
</details>

## 03. [Step04] User component's Lifecycle Hooks
<details>
  <summary>Click to expand!</summary>
  
- Remove exponential.pipe.ts and exponential.pipe.spec.ts files
- Clean the UserComponent template:
    ```html
    <!-- path: src/app/user/user.component.html -->

    <div style="text-align:center">
        <img width="100" alt="property as one-way binding" [src]="image">
        <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
        <div><span>id: </span>{{user.id}}</div>
        <div><span>email: </span>{{user.email}}</div>
        <div><span>birth date: </span>{{user.birthdate}}</div>
    </div>
    ```
- Lifecycle Hooks Interfaces implementation:
    ```typescript
    // path: src/app/user/user.component.ts

    import {
        Component,
        SimpleChanges,
        OnChanges,
        OnInit,
        DoCheck,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
    } from '@angular/core';

    @Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    })
    export class UserComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

    ...
    ```
- Constructor
    ```typescript
     // path: src/app/user/user.component.ts

    constructor () {
        // Est appelé lorsque Angular crée un composant en appelant new de la classe.
    }
    ```
- OnChanges
    ```typescript
    // path: src/app/app.component.ts

    dates = [new Date().getTime()];
    addDate() {
        // Transformation d'objet => Angular ne detectera pas de changements
        this.dates.push(new Date().getTime()); 
        // OU
        // Nouvelle référence d'objet => Angular detectera le changement
        this.dates = this.dates.concat(new Date().getTime()); 
    }
    ```
    ```html
    <!-- path: src/app/app.component.html -->

    <button type="button" (click)="addDate()">Click to add date</button>
    <app-user [dates]="dates"></app-user>
    ```
    ```typescript
    // path: src/app/user/user.component.ts

    @Component({
        ...,
        changeDetection: ChangeDetectionStrategy.Default
    })

    @Input() dates;
    ngOnChanges(changes: SimpleChanges) {
        // Appelé à chaque fois qu'il y a un changement dans l'une des propriétés d'entrée (@Input) du composant.
        // SimpleChanges permet de voir quelles propriétés d'entrée ont changé (si nous en avons plusieurs)et quelles sont les valeurs précédentes et actuelles.
        console.log('---> OnChanges fires here <---', changes);
    }
    ```
    ```html
    <!-- path: src/app/user/user.component.html -->

    <ul>
        <li *ngFor="let dt of dates">{{ dt }}</li>
    </ul>
    ```
- OnInit
    ```typescript
     // path: src/app/user/user.component.ts

    ngOnInit() {
        // Invoqué lorsque le composant donné a été initialisé.
        // Ce hook n'est appelé qu'une fois après le premier ngOnChanges
        console.log('---> OnInit fires <---');
    }
    ```
- DoCheck
    ```typescript
    // path: src/app/app.component.ts

    dates = [new Date().getTime()];
    addDate() {
        // OnPush fonctionne en comparant les références des entrées des composants
        // Jusqu'à ce que nous fournissions la référence d'un nouvel objet au lieu d'un objet existant, le détecteur de changement ne se déclenchera pas.
        this.dates.push(new Date().getTime());
    }
    ```
    ```typescript
    // path: src/app/user/user.component.ts

    @Component({
        ...,
        // Avec OnPush Strategy on force manuellement angular à detecter le changement
        changeDetection: ChangeDetectionStrategy.OnPush
    })

    constructor(
        ...,
        private cd: ChangeDetectorRef
    ) { }

    ngDoCheck() {
        // Grace au ChangeDetectorRef, on peut declencher manuellement la detection du changement quand il s'agit d'une transformation et non d'une création d'un nouvelle référence de la structure de donnée en entrée
        this.cd.markForCheck();
        console.log('---> DoCheck fires <---', this.dates);
    }
    ```
- AfterViewInit, Renderer, ViewChild (HTML input auto-focus)
    ```typescript
     // path: src/app/user/user.component.ts

    @ViewChild('input', null) input;

    constructor(
        ...,
        private renderer: Renderer
    ) { }

    ngAfterViewInit() {
        // Appelé lorsque la vue du composant a été complètement initialisée
        console.log('---> AfterViewInit fires <---');
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    }
    ```
    ```html
    <!-- path: src/app/user/user.component.html -->

    <div style="margin: 2% 5% 0 5%;display:inline-block;">
        <input #input type="text" placeholder="Test input for auto-focus">
    </div>
    ```
- AfterViewChecked
    ```typescript
     // path: src/app/user/user.component.ts

    ngAfterViewChecked() {
        // Appelé à chaque fois que la vue du composant donné a été vérifiée par le mécanisme Change Detection d'Angular.
        console.log('---> AfterViewChecked fires <---');
    }
    ```
- OnDestroy
    ```typescript
     // path: src/app/user/user.component.ts

    ngOnDestroy() {
        // Il est appelé pour nettoyer la logique d'un composant (events, abonnements, timers..), juste avant que ce dernier ne soit détruit.
        console.log('---> OnDestroy fires <---');
    }
    ```
</details>

## 04. [Step05] User editor
<details>
  <summary>Click to expand!</summary>
  
- Replace UserComponent template content by the following:
    ```html
    <!-- path: src/app/user/user.component.html -->

    <div style="text-align:center">
        <img width="100" alt="property as one-way binding" [src]="image">
        <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
        <div><span>id: </span>{{user.id}}</div>
        <div><span>email: </span>{{user.email}}</div>
        <div><span>birth date: </span>{{user.birthdate}}</div>

        <div style="margin: 2% 5% 0 5%;display:inline-block;">
            <input #input type="text" placeholder="Test input for auto-focus">
            <!-- Two-way binding -->
            <input type="text" [(ngModel)]="user.firstname">
            <input type="text" [(ngModel)]="user.lastname">
            <input type="text" [(ngModel)]="user.email">
        </div>
    </div>
    ```
- Error: Missing FormsModule !!! -> import it in AppModule
    ```typescript
    // path: src/app/app.module.ts

    import { FormsModule } from '@angular/forms';

    @NgModule({
        ...
        imports: [
            ...,
            FormsModule,
            ...
        ],
        ...
    })
    ```
- Clean AppComponent class:
    ```typescript
    // path: src/app/app.component.ts

    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
      title = 'Step05';
    }
    ```
- Clean AppComponent template:
    ```html
    <!-- path: src/app/app.component.html -->

    <div style="text-align:center">
        <h1>
            Welcome to {{ title }}!
        </h1>
        <img width="100" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>

    <app-user></app-user>
    ```
- Two-way binding
</details>

## 05. [Step06] Display a list of users
<details>
  <summary>Click to expand!</summary>
  
- Clean the UserComponent class:
    ```typescript
    // path: src/app/user/user.component.ts

    import { Component, OnInit } from '@angular/core';
    import { User } from './user';

    @Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss']
    })
    export class UserComponent implements OnInit {
        image = 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f471-1f3fb.png';

        constructor() { }

        ngOnInit() { }
    }
    ```
- Clean the UserComponent template:
    ```html
    <!-- path: src/app/user/user.component.html -->

    <h2>Users</h2>
    <hr>
    <div class="row">
        <div class="col m4">
            <!-- TODO: Display users list -->
        </div>
        <div class="col m8">
            <!-- TODO: Display user detail on select one -->
        </div>
    </div>
    ```
- Mock users data:
    ```typescript
    // path: src/app/user/user.component.ts

    export const USERS: User[] = [
        {
            id: 1,
            username: 'mehdi',
            password: 'pa$$word',
            email: 'mehdi.mecheri@viveris.fr',
            firstname: 'Mehdi',
            lastname: 'Mecheri',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 2,
            username: 'leo',
            password: 'pa$$word',
            email: 'lionel.messi@barca.es',
            firstname: 'Lionel',
            lastname: 'Messi',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 3,
            username: 'cristiano',
            password: 'pa$$word',
            email: 'cristiano.ronaldo@real.es',
            firstname: 'Cristiano',
            lastname: 'Ronaldo',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 4,
            username: 'neymar',
            password: 'pa$$word',
            email: 'neymar.jr@psg.fr',
            firstname: 'Neymar',
            lastname: 'JR',
            birthdate: new Date(2018, 5, 22)
        }
    ];
    ```
- Initializing the users variable:
    ```typescript
    // path: src/app/user/user.component.ts

    users: User[];

    ngOnInit() {
        this.users = USERS;
    }
    ```
- Display users with *ngFor (structural directive)
    ```html
    <!-- path: src/app/user/user.component.html -->

    <h2>Users</h2>
    <hr>
    <div class="row">
        <div class="col m4">
            <ul>
                <li *ngFor="let user of users">
                    <span>{{user.id}} - {{user.firstname}} {{user.lastname}}</span>
                </li>
            </ul>
        </div>
        <div class="col m8">
            <!-- TODO: Display selected user -->
        </div>
    </div>
    ```
- One-way binding: event binding (from-the-dom)
    ```html
    <!-- path: src/app/user/user.component.html -->

    <li *ngFor="let user of users" (click)="onSelect(user)">
        <span>{{user.id}} - {{user.firstname}} {{user.lastname}} </span>
    </li>
    ```
    ```typescript
    // path: src/app/user/user.component.ts

    selectedUser: User;
    onSelect(user: User): void {
        this.selectedUser = user;
    }
    ```
- Display the user detail -> Error before selecting user !!!
    ```html
    <!-- path: src/app/user/user.component.html -->

    <div class="col m8">
        <!-- TODO: Display selected user -->
        <br>
        <img width="100" alt="property as one-way binding" [src]="image">
        <h2>{{ selectedUser.firstname }} {{ selectedUser.lastname }} Details : </h2>
        <div><span>id: </span>{{selectedUser.id}}</div>
        <input type="text" [(ngModel)]="selectedUser.firstname">
        <input type="text" [(ngModel)]="selectedUser.lastname">
        <input type="text" [(ngModel)]="selectedUser.email">
    </div>
    ```
- Handle empty user detail with *ngIf (structural directive)
    ```html
    <!-- path: src/app/user/user.component.html -->

    <div class="col m8" *ngIf="selectedUser">
    ```
- Generate and apply custom attributes directives (ng generate directive)

    * Highlight directive
        ```bash
        ng generate directive highlight
        ```
        ```typescript
        // path: src/app/highlight.directive.ts

        import { Directive, ElementRef, HostListener } from '@angular/core';

        @Directive({
            selector: '[appHighlight]'
        })
        export class HighlightDirective {
            // ElementRef permet d'acceder à un element natif du DOM
            // ElementRef permet d'éviter de communiquer directement avec l'API DOM qui est une mauvaise pratique
            constructor(private el: ElementRef) {
                this.el.nativeElement.style.backgroundColor = '';
            }

            // @HostListener permet de s'abonner aux événements de l'élément DOM qui héberge la directive
            @HostListener('mouseenter') onMouseEnter() {
                this.highlight('yellow');
            }

            @HostListener('mouseleave') onMouseLeave() {
                this.highlight(null);
            }

            private highlight(color: string) {
                this.el.nativeElement.style.backgroundColor = color;
            }
        }
        ```
        ```scss
        // path: src/app/user/user.component.scss

        li {
            cursor: pointer;
            &.active-line {
                font-weight: bold;
            }
        }
        ```
        ```html
        <!-- path: src/app/user/user.component.html -->

        <li *ngFor="let user of users" [class.active-line]="selectedUser && selectedUser.id === user.id" (click)="onSelect(user)">
            <span appHighlight>{{user.id}} - {{user.firstname}} {{user.lastname}} </span>
        </li>
        ```
    * InputMaxLength directive
        ```bash
        ng generate directive InputMaxLength
        ```
        ```typescript
        // path: src/app/input-max-length.directive.ts

        import { Directive, Input, ElementRef, HostListener } from '@angular/core';

        @Directive({
            selector: '[appInputMaxLength]'
        })
        export class InputMaxLengthDirective {

            @Input() appInputMaxLength: string;

            constructor(private el: ElementRef) { }

            @HostListener('keypress', ['$event']) onkeypress($event: any) {
                if ($event.srcElement.value.length === this.appInputMaxLength) {
                    $event.preventDefault();
                }
            }
        }
        ```
        ```html
        <!-- path: src/app/user/user.component.html -->

        <input type="text" [(ngModel)]="selectedUser.firstname" [appInputMaxLength]="30">
        ```
</details>

## 06. [Step07] User detail component (child component)
<details>
  <summary>Click to expand!</summary>
  
- Clean the UserComponent template
    ```html
    <!-- path: src/app/user/user.component.html -->

    <h2>Users</h2>
    <hr>
    <div class="row">
        <div class="col m4">
            <ul>
                <li *ngFor="let user of users" [class.active-line]="selectedUser && selectedUser.id === user.id" (click)="onSelect(user)">
                    <span appHighlight>{{user.id}} - {{user.firstname}} {{user.lastname}} </span>
                </li>
            </ul>
        </div>
        <div class="col m8" *ngIf="selectedUser">
            <!-- TODO: invoke user detail html tag -->
        </div>
    </div>
    ```
- Generate UserDetailComponent
    ```bash
    ng generate component /user/userDetail
    ```
    ```html
    <!-- path: src/app/user/user-detail/user-detail.component.html -->

    <img width="100" alt="property as one-way binding" [src]="image">
    <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
    <div><span>id: </span>{{user.id}}</div>
    <input type="text" [(ngModel)]="user.firstname" [appInputMaxLength]="30">
    <input type="text" [(ngModel)]="user.lastname">
    <input type="text" [(ngModel)]="user.email">
    ```
- Display user detail --> nothing is happening !!! it's normal
    ```html
    <!-- path: src/app/user/user.component.html -->

    <h2>Users</h2>
    <hr>
    <div class="row">
        <div class="col m4">
            <ul>
                <li *ngFor="let user of users" [class.active-line]="selectedUser && selectedUser.id === user.id" (click)="onSelect(user)">
                    <span appHighlight>{{user.id}} - {{user.firstname}} {{user.lastname}} </span>
                </li>
            </ul>
        </div>
        <div class="col m8" *ngIf="selectedUser">
            <!-- user detail tag -->
            <app-user-detail></app-user-detail>
        </div>
    </div>
    ```
- Components interaction
    1. Parent -> child via <strong>@Input</strong>
        ```typescript
        // path: src/app/user/user-detail/user-detail.component.ts

        @Input() user: User;
        @Input('avatar') image: string;

        constructor() { }
        ...
        ```
        ```html
        <!-- path: src/app/user/user.component.html -->

        <app-user-detail [user]="selectedUser" [avatar]="image"></app-user-detail>
        ```
    2. Parent -> child via <strong>@Input</strong> Setter
        ```typescript
        // path: src/app/user/user.component.ts

        image2 = '               https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f471-1f3fb.png';
        ```
        ```html
        <!-- path: src/app/user/user.component.html -->

        <app-user-detail [user]="selectedUser" [avatar]="image" [avatar2]="image2"></app-user-detail>
        ```
        ```typescript
        // path: src/app/user/user-detail/user-detail.component.ts

        private _image2 = '';
        @Input('avatar2') set image2(data: string) {
            this._image2 = (data && data.trim()) || '<no data found>';
        }
        get image2(): string { return this._image2; }
        ```
        ```html
        <!-- path: src/app/user/user-detail/user-detail.component.html -->

        <img width="100" alt="property as one-way binding" [src]="image2">
        ```
    3. Parent -> child via <strong>ngOnChanges()</strong> hook
        ```typescript
        // path: src/app/user/user-detail/user-detail.component.ts

        import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
        ...
        export class UserDetailComponent implements OnChanges, OnInit {
            ...

            constructor() { }

            ngOnChanges(changes: SimpleChanges) {
                for (let propName in changes) {
                    let chng = changes[propName];
                    let cur = JSON.stringify(chng.currentValue);
                    let prev = JSON.stringify(chng.previousValue);
                    console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
                }
            }

            ngOnInit() { }
            ...
        }
        ```
    4. Child -> parent via <strong>@Output</strong>
        ```typescript
        // path: src/app/user/user-detail/user-detail.component.ts

        @Output() onAction = new EventEmitter<string>();
        action(msg: string) {
            this.onAction.emit(msg);
        }
        ```
        ```html
        <!-- path: src/app/user/user-detail/user-detail.component.html -->

        <button (click)="action('Hello from User-detail-component @Output')">Hello</button>
        ```

        ```typescript
        // path: src/app/user/user.component.ts

        onActionFromUserDetail(msg: string) {
            console.log(msg);
        }
        ```
        ```html
        <!-- path: src/app/user/user.component.html -->

        <app-user-detail [user]="selectedUser" [avatar]="image" (onAction)="onActionFromUserDetail($event)"></app-user-detail>
        ```
    5. Child -> parent via Local variable
        ```typescript
        // path: src/app/user/user-detail/user-detail.component.ts

        public hello = 'Hello from User-detail-component local variable';
        ```
        ```html
        <!-- path: src/app/user/user.component.html -->

        <app-user-detail #localVar [user]="selectedUser" [avatar]="image"></app-user-detail>
        <span>{{ localVar.hello }}</span>
        ```
    6. Child -> parent via <strong>@ViewChild()</strong>
        ```typescript
        // path: src/app/user/user.component.ts

        @ViewChild(UserDetailComponent, null) ud: UserDetailComponent;
        // Update existing function onSelect
        onSelect(user: User): void {
            this.selectedUser = user;
            if (this.ud) {
                console.log(this.ud.hello);
            }
        }
        ```
    7. Parent <-> child via Service
        ```bash
        ng generate service interaction07
        ```
        ```typescript
        // path: src/app/interaction07.component.ts

        import { Injectable } from '@angular/core';
        import { Subject } from 'rxjs';

        @Injectable({
            providedIn: 'root'
        })
        export class Interaction07Service {
            // Observable:
            //  * Data producer alone
            //  * Simple Observable with only one Observer
            // Subject:
            //  * Special type of Observable
            //  * Multiple observers listen to data
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
        ```

        ```typescript
        // path: src/app/user/user.component.ts

        import { Interaction07Service } from '../interaction07.service';

        subscription: Subscription;
        constructor(private service: Interaction07Service) {
            this.subscription= service.broadcastChildStream$.subscribe((dataFromChild) => console.log(dataFromChild));
        }

        broadcastParent() {
            this.service.broadcastParent('Hello from parent');
        }

        ngOnDestroy() {
            // do no forget to implement OnDestroy interface
            this.subscription.unsubscribe(); // prevent memory leak
        }
        ```
        ```html
        <!-- path: src/app/user/user.component.html -->

        <div class="col m4">
            <!-- ... -->

            <button (click)="broadcastParent()">BROADCAST PARENT</button>
        </div>
        ```

        ```typescript
        // path: src/app/user/user-detail/user-detail.component.ts

        subscription: Subscription;
        constructor(private service: Interaction07Service) {
            this.subscription = service.broadcastParentStream$.subscribe((dataFromParent) => console.log(dataFromParent));
        }

        broadcastChild() {
            this.service.broadcastChild('Hello from child');
        }

        ngOnDestroy() {
            // do no forget to implement OnDestroy interface
            this.subscription.unsubscribe(); // prevent memory leak
        }
        ```
        ```html
        <!-- path: src/app/user/user-detail/user-detail.component.html -->

        <button (click)="broadcastChild()">BROADCAST CHILD</button>
        ```
</details>

## 07. [Step08] User service
<details>
  <summary>Click to expand!</summary>
  
- Clean Workspace
    * Remove custom Pipes, custom Directives and Interaction07Service
    * Update the User and UserDetail Components and AppModule imports
    ```typescript
    // path: src/app/app.module.ts

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';

    import { AppComponent } from './app.component';
    import { UserComponent } from './user/user.component';
    import { UserDetailComponent } from './user/user-detail/user-detail.component';

    @NgModule({
        declarations: [
            AppComponent,
            UserComponent,
            UserDetailComponent
        ],
        imports: [
            BrowserModule,
            FormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```
    ```typescript
    // path: src/app/user/user.component.ts

    import { Component, OnInit } from '@angular/core';
    import { User } from './user';

    export const USERS: User[] = [
        {
            id: 1,
            username: 'test',
            password: 'pa$$word',
            email: 'mehdi.mecheri@viveris.fr',
            firstname: 'Mehdi',
            lastname: 'Mecheri',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 2,
            username: 'test',
            password: 'pa$$word',
            email: 'lionel.messi@barca.es',
            firstname: 'Lionel',
            lastname: 'Messi',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 3,
            username: 'test',
            password: 'pa$$word',
            email: 'cristiano.ronaldo@real.es',
            firstname: 'Cristiano',
            lastname: 'Ronaldo',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 4,
            username: 'test',
            password: 'pa$$word',
            email: 'neymar.jr@psg.fr',
            firstname: 'Neymar',
            lastname: 'JR',
            birthdate: new Date(2018, 5, 22)
        }
    ];

    @Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss']
    })
    export class UserComponent implements OnInit {

        users: User[];
        selectedUser: User;

        image = 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f471-1f3fb.png';

        constructor() {}

        ngOnInit() {
            this.users = USERS;
        }

        onSelect(user: User): void {
            this.selectedUser = user;
        }
    }
    ```
    ```html
    <!-- path: src/app/user/user.component.html -->

    <h2>Users</h2>
    <hr>
    <div class="row">
        <div class="col m4">
            <ul>
                <li *ngFor="let user of users" [class.active-line]="selectedUser && selectedUser.id === user.id" (click)="onSelect(user)">
                    <span>{{user.id}} - {{user.firstname}} {{user.lastname}} </span>
                </li>
            </ul>
        </div>
        <div class="col m8" *ngIf="selectedUser">
            <app-user-detail [user]="selectedUser" [avatar]="image"></app-user-detail>
        </div>
    </div>
    ```

    ```typescript
    // path: src/app/user/user-detail/user-detail.component.ts

    import { Component, Input, OnInit } from '@angular/core';
    import { User } from '../user';

    @Component({
        selector: 'app-user-detail',
        templateUrl: './user-detail.component.html',
        styleUrls: ['./user-detail.component.scss']
    })
    export class UserDetailComponent implements OnInit {

        @Input() user: User;
        @Input('avatar') image: User;

        constructor() { }

        ngOnInit() { }
    }
    ```
    ```html
    <!-- path: src/app/user/user-detail/user-detail.component.html -->

    <img width="100" alt="property as one-way binding" [src]="image">
    <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
    <div><span>id: </span>{{user.id}}</div>
    <input type="text" [(ngModel)]="user.firstname">
    <input type="text" [(ngModel)]="user.lastname">
    <input type="text" [(ngModel)]="user.email">
    ```
- Generate the User Service
    ```bash
    ng generate service user/user
    ```
- Move USERS table from userComponent to the generated UserService
    ```typescript
    // path: src/app/user/user.service.ts

    import { Injectable } from '@angular/core';
    import { Observable } from 'rxjs';
    import { User } from './user';

    export const USERS: User[] = [
        {
            id: 1,
            username: 'test',
            password: 'pa$$word',
            email: 'mehdi.mecheri@viveris.fr',
            firstname: 'Mehdi',
            lastname: 'Mecheri',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 2,
            username: 'test',
            password: 'pa$$word',
            email: 'lionel.messi@barca.es',
            firstname: 'Lionel',
            lastname: 'Messi',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 3,
            username: 'test',
            password: 'pa$$word',
            email: 'cristiano.ronaldo@real.es',
            firstname: 'Cristiano',
            lastname: 'Ronaldo',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 4,
            username: 'test',
            password: 'pa$$word',
            email: 'neymar.jr@psg.fr',
            firstname: 'Neymar',
            lastname: 'JR',
            birthdate: new Date(2018, 5, 22)
        }
    ];

    @Injectable({
        providedIn: 'root'
    })
    export class UserService {
        constructor() { }
    }
    ```

- Inject the generated UserService into UserComponent and load users Synchronously and Asynchronously
    ```typescript
    // path: src/app/user/user.component.ts

    constructor(private userService: UserService) {}
    ```

- Load users synchronously
    ```typescript
    // path: src/app/user/user.service.ts

    getUsers(): User[] {
        return USERS;
    }

    // path: src/app/user/user.component.ts

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers() {
        this.users = this.userService.getUsers();
    }

    ```

- Load users asynchronously with Observables
    ```typescript
    // path: src/app/user/user.service.ts

    // The UserService must wait for the server to respond
    // getUsers() cannot return immediately with data,
    // and the browser will not block while the service waits
    getUsersAsync(): Observable<User[]> {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(USERS);
                observer.complete();
            }, 3000);

            try {
                // throw Error("Boom");
            } catch (e) {
                observer.error(e);
            }
        });

        // return of(USERS);
    }
    ```
    ```typescript
    // path: src/app/user/user.component.ts

    usersAsync: User[];
    ngOnInit() {
        this.loadUsers();
        this.loadUsersAsync();
    }

    loadUsersAsync() {
        this.userService.getUsersAsync()
        .subscribe(
            (data: User[]) => this.usersAsync = data,
            (error) => console.log(error)
        );
    }
    ```
    ```html
    <!-- path: src/app/user/user.component.html -->

    <h2>Users</h2>
    <hr>
    <div class="row">
        <div class="col m4">
            <ul>
                <li *ngFor="let user of users" [class.active-line]="selectedUser && selectedUser.id === user.id" (click)="onSelect(user)">
                    <span>{{user.id}} - {{user.firstname}} {{user.lastname}} </span>
                </li>
                <hr>
                <span *ngIf="!usersAsync">Waiting for usersAsync...</span>
                <ul>
                    <li *ngFor="let user of usersAsync" [class.active-line]="selectedUser && selectedUser.id === user.id" (click)="onSelect(user)">
                        <span>{{user.id}} - {{user.firstname}} {{user.lastname}}</span>
                    </li>
                </ul>
            </ul>
        </div>
        <div class="col m8" *ngIf="selectedUser">
            <app-user-detail [user]="selectedUser" [avatar]="image"></app-user-detail>
        </div>
    </div>
    ```
- RxJS API demo
</details>

## 08. [Step09] Routing
<details>
  <summary>Click to expand!</summary>
  
- Generate AppRoutingModule
    ```bash
    ng generate module app-routing --flat
    ```
- Update AppRoutingModule and export RouterModule
    ```typescript
    // path: src/app/app-routing.module.ts

    import { NgModule } from '@angular/core';
    import { RouterModule } from '@angular/router';

    @NgModule({
        imports: [],
        exports: [
            RouterModule
        ]
    })
    export class AppRoutingModule { }
    ```
- Generate Home Component
    ```bash
    ng generate component home
    ```
- Add routes for User, UserDetail and Home components
    ```typescript
    // path: src/app/app-routing.module.ts

    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    import { HomeComponent } from './home/home.component';
    import { UserComponent } from './user/user.component';
    import { UserDetailComponent } from './user/user-detail/user-detail.component';

    const routes: Routes = [
        { path: 'home', component: HomeComponent },
        { path: 'user', component: UserComponent },
        { path: 'user/:id', component: UserDetailComponent },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    })
    export class AppRoutingModule { }
    ```
- Add a default route
    ```typescript
    // path: src/app/app-routing.module.ts

    const routes: Routes = [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        ...
    ];
    ```
- Void AppComponent template by moving it's content to HomeComponent template and <strong>remove UserComponent html tag</strong>
    ```html
    <!-- path: src/app/home/home.component.html -->

    <div style="text-align:center">
        <h1>
            Welcome to {{ title }}!
        </h1>
        <img width="100" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    ```
    ```typescript
    // path: src/app/home/home.component.ts

    import { Component, OnInit } from '@angular/core';

    @Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
    export class HomeComponent implements OnInit {
        title = 'Angular CLI Starter';
        constructor() { }
        ngOnInit() {
        }
    }
    ```
- Add RouterOutlet in AppComponent template
    ```html
    <!-- path: src/app/app.component.html -->

    <router-outlet></router-outlet>
    ```
- Import newly AppRoutingModule in AppModule
    ```typescript
    // path: src/app/app.module.ts

    import { AppRoutingModule } from './app-routing.module';

    imports: [
        ...
        AppRoutingModule
    ],
    ```
- Import some ngx-materialize UI Modules in AppModule
    ```typescript
    // path: src/app/app.module.ts

    import { MzNavbarModule, MzInputModule, MzButtonModule, MzValidationModule, MzSpinnerModule } from 'ngx-materialize';

    imports: [
        ...
        MzNavbarModule,
        MzInputModule,
        MzButtonModule,
        MzValidationModule,
        MzSpinnerModule
    ],
    ```
- Generate NavbarComponent for navigation links
    ```bash
    ng generate component navbar
    ```
    ```typescript
    // path: src/app/navbar/navbar.component.ts

    import { Component, OnInit } from '@angular/core';

    @Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss']
    })
    export class NavbarComponent implements OnInit {
        items: any[];

        constructor() {}

        ngOnInit() {
            this.initItems();
        }

        initItems() {
            this.items = [
                {
                    name: 'Home',
                    id: 'home',
                    class: '',
                    url: '/home',
                },
                {
                    name: 'Users',
                    id: 'user',
                    class: '',
                    url: '/user',
                }
            ];
        }
    }
    ```
    ```html
    <!-- path: src/app/navbar/navbar.component.html -->

    <mz-navbar navbarClass="teal">
        <div class="container">
            <a href="#" class="brand-logo hide-on-med-and-down">ANGULAR CLI STARTER</a>
            <mz-navbar-item-container [align]="'right'">
                <mz-navbar-item *ngFor="let item of items">
                    <a routerLink="{{ item.url }}" id="{{ item.id }}">{{ item.name }}</a>
                </mz-navbar-item>
            </mz-navbar-item-container>
        </div>
    </mz-navbar>
    ```
- Update AppComponent template and invoke Navbar tag outside RouterOutlet
    ```html
    <!-- path: src/app/app.component.html -->

    <app-navbar></app-navbar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    ```
- Import some primeng UI Modules in AppModule
    ```typescript
    // path: src/app/app.module.ts

    import { TableModule } from 'primeng/table';
    import { BreadcrumbModule } from 'primeng/breadcrumb';
    import { DialogModule } from 'primeng/dialog';

    imports: [
        ...
        TableModule,
        BreadcrumbModule,
        DialogModule
    ]
    ```
- Import BrowserAnimationsModule
    ```typescript
    // path: src/app/app.module.ts

    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

    imports: [
        ...
        BrowserAnimationsModule,
        ...
    ],
    ```

- Clean UserService
    ```typescript
    // path: src/app/user/user.service.ts

    import { Injectable } from '@angular/core';
    import { Observable, of } from 'rxjs';
    import { User } from './user';

    export const USERS: User[] = [
        {
            id: 1,
            username: 'test',
            password: 'pa$$word',
            email: 'mehdi.mecheri@viveris.fr',
            firstname: 'Mehdi',
            lastname: 'Mecheri',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 2,
            username: 'test',
            password: 'pa$$word',
            email: 'lionel.messi@barca.es',
            firstname: 'Lionel',
            lastname: 'Messi',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 3,
            username: 'test',
            password: 'pa$$word',
            email: 'cristiano.ronaldo@real.es',
            firstname: 'Cristiano',
            lastname: 'Ronaldo',
            birthdate: new Date(2018, 5, 22)
        },
        {
            id: 4,
            username: 'test',
            password: 'pa$$word',
            email: 'neymar.jr@psg.fr',
            firstname: 'Neymar',
            lastname: 'JR',
            birthdate: new Date(2018, 5, 22)
        }
    ];

    @Injectable({
        providedIn: 'root'
    })
    export class UserService {
        constructor() { }

        getUsers(): Observable<User[]> {
            return of(USERS);
        }
    }
    ```

- Enhance and clean UserComponent with injected Router and primeng UI components (Table, Breadcrumb)
    ```typescript
    // path: src/app/user/user.component.ts

    import { Component, OnInit } from '@angular/core';
    import { Router } from '@angular/router';

    import { User } from './user';
    import { UserService } from './user.service';

    @Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss']
    })
    export class UserComponent implements OnInit {
        users: User[];
        selectedUser: User;

        bcItems = [
            { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
            { label: 'Users', }
        ];

        cols = [
            { field: 'id', header: 'ID' },
            { field: 'firstname', header: 'First Name' },
            { field: 'lastname', header: 'Last Name' }
        ];

        constructor(
            private router: Router,
            private userService: UserService
        ) { }

        ngOnInit() {
            this.getUsers();
        }

        onSelect(user: User): void {
            this.selectedUser = user;
        }

        getUsers() {
            this.userService.getUsers()
            .subscribe(
                (data: User[]) => this.users = data,
                (error) => console.log(error)
            );
        }

        detail(user: User) {
            this.router.navigate(['user', user.id]);
        }
    }
    ```
    ```html
    <!-- path: src/app/user/user.component.html -->

    <p-breadcrumb [model]="bcItems"></p-breadcrumb>
    <h2>Users</h2>
    <p-table #dt [columns]="cols" [value]="users" [paginator]="true" [rows]="5" [pageLinks]="3">
        <ng-template pTemplate="caption">
            <input type="text" pInputText size="50" placeholder="Global filter" (input)="dt.filterGlobal($event.target.value, 'contains')">
        </ng-template>
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns" [pSortableColumn]="col.field" style="width: 20%">
                    {{col.header}}
                    <p-sortIcon [field]="col.field" ariaLabel="Activate to sort" ariaLabelDesc="Activate to sort in descending order" ariaLabelAsc="Activate to sort in ascending order"></p-sortIcon>
                </th>
                <th style="width: 30%">Actions</th>
            </tr>
            <tr>
                <th *ngFor="let col of columns">
                    <input pInputText type="text" placeholder="Column filter" (input)="dt.filter($event.target.value, col.field, col.filterMatchMode)">
                </th>
                <th></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-user let-columns="columns">
            <tr>
                <td *ngFor="let col of columns">
                    {{user[col.field]}}
                </td>
                <td>
                    <button mz-button (click)="detail(user)"><i class="material-icons">search</i></button>
                </td>
            </tr>
        </ng-template>
    </p-table>
    ```

- Navigate to the User detail -> nothing displayed !!! -> it's normal
- Add function in UserService to get specific user by ID
    ```typescript
    // path: src/app/user/user.service.ts

    getUser(id: number): Observable<User> {
        return of(USERS.find(user => user.id === id));
    }
    ```
- Enhance UserDetailComponent and Extract user ID from ActivatedRoute Parameters
    ```typescript
    // path: src/app/user/user-detail/user-detail.component.ts

    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute } from '@angular/router';

    import { User } from '../user';
    import { UserService } from '../user.service';

    @Component({
        selector: 'app-user-detail',
        templateUrl: './user-detail.component.html',
        styleUrls: ['./user-detail.component.scss']
    })
    export class UserDetailComponent implements OnInit {
        user: User;

        constructor(
            private route: ActivatedRoute,
            private userService: UserService
        ) { }

        ngOnInit() {
            this.getUser();
        }

        getUser(): void {
            const id = +this.route.snapshot.paramMap.get('id');
            this.userService.getUser(id)
                .subscribe(user => this.user = user);
        }
    }
    ```
    ```html
    <!-- path: src/app/user/user-detail/user-detail.component.html -->

    <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
    <div><span>id: </span>{{user.id}}</div>
    <input type="text" [(ngModel)]="user.firstname">
    <input type="text" [(ngModel)]="user.lastname">
    <input type="text" [(ngModel)]="user.email">
    ```
</details>

## 09. [Step10] User CRUD
<details>
  <summary>Click to expand!</summary>
  
- Generate User new, edit and delete Components and its routes
    ```bash
    ng generate component user/userNew
    ng generate component user/userEdit
    ng generate component user/userDelete
    ```
- Add routes for newly generated components (UserDeleteComponent is not concerned)
    ```typescript
    // path: src/app/app-routing.module.ts

    ...
    import { UserNewComponent } from './user/user-new/user-new.component';
    import { UserEditComponent } from './user/user-edit/user-edit.component';

    const routes: Routes = [
        ...
        { path: 'user/add/new', component: UserNewComponent },
        { path: 'user/edit/:id', component: UserEditComponent },
    ];
    ```
- Update UserComponent with navigation links to the newly created components
    ```html
    <!-- path: src/app/user/user.component.html -->
    <p-breadcrumb [model]="bcItems"></p-breadcrumb>
    <h2>Users</h2>
    <p-table #dt [columns]="cols" [value]="users" [paginator]="true" [rows]="5" [pageLinks]="3">
        <ng-template pTemplate="caption">
            <button mz-button class="right" (click)="add()"><i class="material-icons">add</i></button>
            <input type="text" pInputText size="50" placeholder="Global filter" (input)="dt.filterGlobal($event.target.value, 'contains')">
        </ng-template>
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns" [pSortableColumn]="col.field" style="width: 20%">
                    {{col.header}}
                    <p-sortIcon [field]="col.field" ariaLabel="Activate to sort" ariaLabelDesc="Activate to sort in descending order" ariaLabelAsc="Activate to sort in ascending order"></p-sortIcon>
                </th>
                <th style="width: 30%">Actions</th>
            </tr>
            <tr>
                <th *ngFor="let col of columns">
                    <input pInputText type="text" placeholder="Column filter" (input)="dt.filter($event.target.value, col.field, col.filterMatchMode)">
                </th>
                <th></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-user let-columns="columns">
            <tr>
                <td *ngFor="let col of columns">
                    {{user[col.field]}}
                </td>
                <td>
                    <button mz-button (click)="detail(user)"><i class="material-icons">search</i></button>
                    <button mz-button (click)="edit(user)"><i class="material-icons">edit</i></button>
                    <button mz-button (click)="showDeleteModal(user)" class="red"><i class="material-icons">delete_forever</i></button>
                </td>
            </tr>
        </ng-template>
    </p-table>

    <app-user-delete *ngIf="displayDeleteModal" [data]="userToDelete" [display]="displayDeleteModal" (onAction)="onActionDelete($event)"></app-user-delete>
    ```
    ```typescript
    // path: src/app/user/user.component.ts
    ...

    userToDelete: User;
    displayDeleteModal: boolean = false;

    add() {
        this.router.navigate(['user', 'add', 'new']);
    }

    edit(user: User) {
        this.router.navigate(['user', 'edit', user.id]);
    }

    showDeleteModal(user: User) {
        this.userToDelete = user;
        this.displayDeleteModal = true;
    }

    onActionDelete(del: boolean) {
        this.displayDeleteModal = false;
        if (del) {
            this.getUsers();
        }
    }
    ```
- Set up UserDeleteComponent
    ```typescript
    // path: src/app/user/user-delete/user-delete.component.ts

    import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
    import { User } from '../user';
    import { UserService } from '../user.service';

    @Component({
        selector: 'app-user-delete',
        templateUrl: './user-delete.component.html',
        styleUrls: ['./user-delete.component.scss']
    })
    export class UserDeleteComponent implements OnInit {
        @Input('data') user: User;
        @Input() display: boolean;
        @Output() onAction = new EventEmitter<boolean>();

        constructor(
            private userService: UserService,
        ) { }

        ngOnInit() { }

        cancel() {
            this.onAction.emit(false);
        }

        delete() {
            this.onAction.emit(true);
        }
    }
    ```
    ```html
    <!-- path: src/app/user/user-delete/user-delete.component.html -->

    <p-dialog header="Delete user" [(visible)]="display" [modal]="true" width="400">
        <div class="row">
            <mz-input-container class="col s12 m12">
                <input mz-input id="username" type="text" [(ngModel)]="user.username" [label]="'User name'" disabled/>
            </mz-input-container>
            <mz-input-container class="col s12 m12">
                <input mz-input id="password" type="password" [(ngModel)]="user.password" [label]="'Password'" disabled/>
            </mz-input-container>
            <mz-input-container class="col s12 m12">
                <input mz-input id="email" [(ngModel)]="user.email" [label]="'Email'" disabled/>
            </mz-input-container>
            <mz-input-container class="col s12 m12">
                <input mz-input id="firstname" [(ngModel)]="user.firstname" [label]="'First name'" disabled/>
            </mz-input-container>
            <mz-input-container class="col s12 m12">
                <input mz-input id="lastname" [(ngModel)]="user.lastname" [label]="'Last name'" disabled/>
            </mz-input-container>
        </div>
        <p-footer>
            <button mz-button class="blue-grey lighten-1" (click)="cancel()" type="button">CANCEL</button>
            <button mz-button class="red" (click)="delete()">DELETE</button>
        </p-footer>
    </p-dialog>
    ```
- Import ReactiveFormsModule for the app
    ```typescript
    // path: src/app/app.module.ts

    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    imports: [
        ...
        FormsModule,
        ReactiveFormsModule,
        ...
    ],
    ```
- Enhance UserDetailComponent
    ```typescript
    // path: src/app/user/user-detail/user-detail.component.ts

    import { Component, OnInit } from '@angular/core';
    import { Router, ActivatedRoute } from '@angular/router';

    import { User } from '../user';
    import { UserService } from '../user.service';

    @Component({
        selector: 'app-user-detail',
        templateUrl: './user-detail.component.html',
        styleUrls: ['./user-detail.component.scss']
    })
    export class UserDetailComponent implements OnInit {
        user: User;

        bcItems = [
            { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
            { label: 'Users', routerLink: '/user' },
            { label: 'User Details' }
        ];

        constructor(
            private router: Router,
            private route: ActivatedRoute,
            private userService: UserService
        ) {
            this.user = new User();
        }

        ngOnInit() {
            this.getUser();
        }

        getUser() {
            const id = +this.route.snapshot.paramMap.get('id');
            this.userService.getUser(id)
            .subscribe(user => this.user = user);
        }

        cancel() {
            this.router.navigate(['user']);
        }

        edit() {
            this.router.navigate(['user', 'edit', +this.route.snapshot.paramMap.get('id')]);
        }
    }
    ```
    ```html
    <!-- path: src/app/user/user-detail/user-detail.component.html -->

    <p-breadcrumb [model]="bcItems"></p-breadcrumb>
    <h2>User Details : </h2>
    <div class="row">
        <mz-input-container class="col s12 m12">
            <input mz-input id="username" type="text" [(ngModel)]="user.username" [label]="'User name'" [placeholder]="'User name'" disabled/>
        </mz-input-container>
        <mz-input-container class="col s12 m12">
            <input mz-input id="password" type="password" [(ngModel)]="user.password" [label]="'Password'" [placeholder]="'Password'" disabled/>
        </mz-input-container>
        <mz-input-container class="col s12 m12">
            <input mz-input id="email" [(ngModel)]="user.email" [label]="'Email'" [placeholder]="'Email'" disabled/>
        </mz-input-container>
        <mz-input-container class="col s12 m12">
            <input mz-input id="firstname" [(ngModel)]="user.firstname" [label]="'First name'" [placeholder]="'First name'" disabled/>
        </mz-input-container>
        <mz-input-container class="col s12 m12">
            <input mz-input id="lastname" [(ngModel)]="user.lastname" [label]="'Last name'" [placeholder]="'Last name'" disabled/>
        </mz-input-container>
    </div>
    <button mz-button class="blue-grey lighten-1" (click)="cancel()" type="button">CANCEL</button>
    <button mz-button (click)="edit()">EDIT</button>
    ```
- Set up ReactiveForms (FormControl, FormGroup, FormBuilder, Validators)

    * UserNewComponent
        ```typescript
        // path: src/app/user/user-new/user-new.component.ts

        import { Component, OnInit } from '@angular/core';
        import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
        import { Router } from '@angular/router';

        import { UserService } from './../../user/user.service';

        @Component({
            selector: 'app-user-new',
            templateUrl: './user-new.component.html',
            styleUrls: ['./user-new.component.scss']
        })
        export class UserNewComponent implements OnInit {
            newForm: FormGroup;

            bcItems = [
                { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
                { label: 'Users', routerLink: '/user' },
                { label: 'User New' }
            ];

            validation: any = {
                username: {
                    required: 'User name is required.',
                },
                password: {
                    required: 'Password is required.',
                },
                email: {
                    required: 'Email is required.',
                    email: 'Invalid Email',
                },
                firstname: {
                    required: 'First name is required.',
                    forbidden: 'Unauthorized string.',
                },
                lastname: {
                    required: 'Last name is required.',
                }
            }

            constructor(
                private router: Router,
                private fb: FormBuilder,
                private userService: UserService
            ) { }

            ngOnInit() {
                this.createForm();
            }

            createForm() {
                if (this.newForm) { this.newForm.reset(); }
                    this.newForm = this.fb.group({ // <==> new FormGroup({ username: new FormControl() })
                    username: ['', Validators.required],
                    password: ['', Validators.required],
                    email: ['', [Validators.required, Validators.email]],
                    firstname: ['', Validators.required],
                    lastname: ['', Validators.required]
                });
            }

            cancel() {
                this.router.navigate(['user']);
            }

            save() {
                // TODO: call injected userService to save data via http call
            }
        }
        ```
        ```html
        <!-- path: src/app/user/user-new/user-new.component.html -->

        <p-breadcrumb [model]="bcItems"></p-breadcrumb>
        <h2>User New : </h2>

        <form [formGroup]="newForm" (ngSubmit)="save()" novalidate>
            <div class="row">
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="username" formControlName="username" type="text" [errorMessageResource]="validation.username" [label]="'User name'" [placeholder]="'User name'" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="password" formControlName="password" type="password" [errorMessageResource]="validation.password" [label]="'Password'" [placeholder]="'Password'" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="email" formControlName="email" type="text" [errorMessageResource]="validation.email" [label]="'Email'" [placeholder]="'Email'" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="firstname" formControlName="firstname" type="text" [errorMessageResource]="validation.firstname" [label]="'First name'" [placeholder]="'First name'" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="lastname" formControlName="lastname" type="text" [errorMessageResource]="validation.lastname" [label]="'Last name'" [placeholder]="'Last name'" />
                </mz-input-container>
            </div>

            <button mz-button class="blue-grey lighten-1" (click)="cancel()" type="button">CANCEL</button>
            <button mz-button [disabled]="!newForm.valid" type="submit">SAVE</button>
        </form>
        ```

    * UserEditComponent
        ```typescript
        // path: src/app/user/user-edit/user-edit.component.ts

        import { Component, OnInit } from '@angular/core';
        import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
        import { Router, ActivatedRoute } from '@angular/router';

        import { User } from '../../user/user';
        import { UserService } from '../../user/user.service';

        @Component({
            selector: 'app-user-edit',
            templateUrl: './user-edit.component.html',
            styleUrls: ['./user-edit.component.scss']
        })
        export class UserEditComponent implements OnInit {
            user: User;
            editForm: FormGroup;

            bcItems = [
                { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
                { label: 'Users', routerLink: '/user' },
                { label: 'User Edit' }
            ];;

            validation: any = {
                username: {
                    required: 'User name is required.',
                },
                password: {
                    required: 'Password is required.',
                },
                email: {
                    required: 'Email is required.',
                    email: 'Invalid Email',
                },
                firstname: {
                    required: 'First name is required.',
                },
                lastname: {
                    required: 'Last name is required.',
                }
            }

            constructor(
                private router: Router,
                private route: ActivatedRoute,
                private fb: FormBuilder,
                private userService: UserService
            ) { }

            ngOnInit() {
                this.createForm();
                this.getUser();
            }

            getUser(): void {
                const id = +this.route.snapshot.paramMap.get('id');
                this.userService.getUser(id).subscribe(user => {
                    this.user = user;
                    this.editForm.patchValue(this.user);
                });
            }

            createForm() {
                if (this.editForm) { this.editForm.reset(); }
                this.editForm = this.fb.group({
                    id: [''],
                    username: ['', Validators.required],
                    password: ['', Validators.required],
                    email: ['', [Validators.required, Validators.email]],
                    firstname: ['', Validators.required],
                    lastname: ['', Validators.required],
                });
            }

            cancel() {
                this.router.navigate(['user']);
            }

            save() {
                // TODO: call injected userService to save data via http call
            }
        }
        ```
        ```html
        <!-- path: src/app/user/user-edit/user-edit.component.html -->

        <p-breadcrumb [model]="bcItems"></p-breadcrumb>
        <h2>User Edit : </h2>
        <form *ngIf="user" [formGroup]="editForm" (ngSubmit)="save()" novalidate>
            <div class="row">
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="username" formControlName="username" type="text" [errorMessageResource]="validation.username" [label]="'User name'" [placeholder]="'User name'" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="password" formControlName="password" type="password" [errorMessageResource]="validation.password" [label]="'Password'" [placeholder]="'Password'" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="email" formControlName="email" type="text" [errorMessageResource]="validation.email" [label]="'Email'" [placeholder]="'Email'" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="firstname" formControlName="firstname" type="text" [errorMessageResource]="validation.firstname" [label]="'First name'" [placeholder]="'First name'" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="lastname" formControlName="lastname" type="text" [errorMessageResource]="validation.lastname" [label]="'Last name'" [placeholder]="'Last name'" />
                </mz-input-container>
            </div>
            <button mz-button class="blue-grey lighten-1" (click)="cancel()" type="button">CANCEL</button>
            <button mz-button [disabled]="!editForm.valid" type="submit">SAVE</button>
        </form>
        ```
- Set up custom validators example
    ```typescript
    // path: src/app/user/user-new/user-new.component.ts

    this.newForm = this.fb.group({
        ...
        firstname: ['', [Validators.required, forbiddenValidator(/test/)]],
    });

    export function forbiddenValidator(nameRe: RegExp): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            const forbidden = nameRe.test(control.value);
            return forbidden ? { 'forbidden': { value: control.value } } : null;
        };
    }
    ```
</details>

## 10. [Step11] HttpClient
<details>
  <summary>Click to expand!</summary>
  
- Enable Angular's HTTP module (HttpClientModule)
    ```typescript
    // path: src/app/app.module.ts

    import { HttpClientModule } from '@angular/common/http';
    ...
    imports: [
        ...
        HttpClientModule,
    ],
    ```
- HttpClient API examples
    ```typescript
    // Récupération de données JSON
    this.http.get('https://api.github.com/emojis')
        .subscribe(data => {
        console.log(data['hugs']);
        });

    // Vérification du type de la réponse
    interface EmojisResponse { hugs: string; }
    this.http.get<EmojisResponse>('https://api.github.com/emojis')
        .subscribe(data => {
            console.log(data.hugs);
        });

    // Récupération de la totalité de la réponse pas le body uniquement
    this.http.get('https://api.github.com/emojis', { observe: 'response' })
        .subscribe(resp => console.log(resp));

    // Gestion des erreurs
    this.http.get('https://api.github.com/emojisqsd')
        .subscribe(
            data => console.log(data),
            error => console.log('Erreur http -->', error)
        );

    // Récupération de données non-JSON
    this.http.get('file.txt', { responseType: 'text' })
        .subscribe(data => console.log(data));

    // Envoyer des données a un serveur
    // Requete POST
    const body = { name: 'Mehdi' };
    this.http
        .post('/api/users/add', body)
        .subscribe(
            data => console.log(data),
            error => console.log('Erreur http -->', error)
        );

    // Headers
    const body = { name: 'Mehdi' };
    this.http
        .post('/api/users/add', body, {
            headers: new HttpHeaders().set('Authorization', 'auth-token'),
        })
        .subscribe();

    // URL Parameters
    const body = { name: 'Mehdi' };
    this.http
        .post('/api/users/add', body, {
            params: new HttpParams().set('id', '3'),
        })
        .subscribe();
    ```
- Import required RxJS objects and operators
    ```typescript
    // path: src/app/user/user.service.ts

    import { Observable, throwError } from 'rxjs';
    import { map, catchError } from 'rxjs/operators';
    ```
- Inject HttpClient into UserService and remove USERS Mocks table
    ```typescript
    // path: src/app/user/user.service.ts

    constructor(private http: HttpClient) { }
    ```
- Handle HTTP errors
    ```typescript
    // path: src/app/user/user.service.ts

    private handleError(error: HttpErrorResponse) {
        let msg = error.error.message;
        // return an observable with a user-facing error message
        console.error(msg);
        return throwError(msg);
    };
    ```
- HTTP GET all users
    ```typescript
    // path: src/app/user/user.service.ts

    getUsers(): Observable<User[]> {
        // return of(USERS);
        return this.http
        .get(`https://aspnetcoreapistarter.azurewebsites.net/api/User`)
        .pipe(
            map((resp) => resp as User[]),
            catchError(this.handleError)
        );
    }
    ```
- HTTP GET user by ID
    ```typescript
    // path: src/app/user/user.service.ts

    getUser(id: number): Observable<User> {
        // return of(USERS.find(user => user.id === id));
        return this.http
        .get(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${id}`)
        .pipe(
            map((resp) => resp as User),
            catchError(this.handleError)
        );
    }
    ```
- HTTP POST new user
    ```typescript
    // path: src/app/user/user.service.ts

    createUser(user: User): Observable<any> {
        return this.http
        .post(`https://aspnetcoreapistarter.azurewebsites.net/api/User`, user)
        .pipe(catchError(this.handleError))
    }
    ```
- HTTP PUT existing user
    ```typescript
    // path: src/app/user/user.service.ts

    updateUser(user: User): Observable<any> {
        return this.http
        .put(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${user.id}`, user)
        .pipe(catchError(this.handleError))
    }
    ```
- HTTP DELETE existing user
    ```typescript
    // path: src/app/user/user.service.ts

    deleteUser(id: number): Observable<any> {
        return this.http
        .delete(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${id}`)
        .pipe(catchError(this.handleError))
    }
    ```
- Install angular-notifier to handle notifications
    ```bash
    npm install --save angular-notifier
    ```
- Create new file src/styles/_notifier.scss to import newly installed notifier styles
    ```scss
    // path: src/sass/_notifier.scss

    @import "~angular-notifier/styles/core.css";
    @import "~angular-notifier/styles/themes/theme-material.css";
    @import "~angular-notifier/styles/types/type-error.css";
    @import "~angular-notifier/styles/types/type-success.css";
    @import "~angular-notifier/styles/types/type-warning.css";
    @import "~angular-notifier/styles/types/type-info.css";
    ```
- Update app.scss
    ```scss
    // path: src/sass/app.scss

    ...
    ...
    @import "_notifier";
    @import "_custom";
    ```
- Import angular-notifier in the AppModule and set up it's conf
    ```typescript
    // path: src/app/app.module.ts

    import { NotifierModule } from 'angular-notifier';
    ...

    imports: [
        ...
        NotifierModule.withConfig({
            position: {
                horizontal: {
                    position: 'right'
                },
                vertical: {
                    distance: 35
                }
            }
        })
    ],
    ```
- Inject angular-notifier service in the user's CRUD Components
    ```typescript
    constructor(
        ...
        private notifier: NotifierService,
    ) { }
    ```
- Update User's CRUD components HTTP calls
    ```typescript
    // path: src/app/user/user.component.ts

    getUsers() {
        this.userService.getUsers()
        .subscribe(
            (data: User[]) => this.users = data,
            error => this.notifier.notify('error', error)
        );
    }
    ```
    ```typescript
    // path: src/app/user/user-detail/user-detail.component.ts

    getUser(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUser(id)
        .subscribe(
            (user: User) => this.user = user,
            error => this.notifier.notify('error', error)
        );
    }
    ```
    ```typescript
    // path: src/app/user/user-new/user-new.component.ts

    save() {
        this.userService.createUser(this.newForm.value)
        .subscribe(
            resp => {
                this.notifier.notify('success', 'Operation successfully done !');
                this.router.navigate(['user', resp.id]);
            },
            error => this.notifier.notify('error', error)
        );
    }
    ```
    ```typescript
    // path: src/app/user/user-edit/user-edit.component.ts

    getUser(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUser(id)
        .subscribe(
            user => {
                this.user = user;
                this.editForm.patchValue(this.user);
            },
            error => this.notifier.notify('error', error)
        );
    }

    save() {
        this.userService.updateUser(<User>this.editForm.value)
        .subscribe(
            resp => {
                this.notifier.notify('success', 'Operation successfully done !');
                this.router.navigate(['user', resp.id]);
            },
            error => this.notifier.notify('error', error)
        );
    }
    ```
    ```typescript
    // path: src/app/user/user-delete/user-delete.component.ts

    delete() {
        this.userService.deleteUser(this.user.id)
        .subscribe(
            resp => {
                this.notifier.notify('success', 'Operation successfully done !');
                this.onAction.emit(true);
            },
            error => this.notifier.notify('error', error)
        );
    }
    ```
- Add angular-notifier HTML tag in AppComponent template outside the RouterOutlet
    ```html
    <!-- path: src/app/app.component.html -->

    <notifier-container></notifier-container>
    ```
</details>

## 11. [Step12] CoreModule
<details>
  <summary>Click to expand!</summary>
  
- Generate CoreModule
    ```bash
    ng generate module core
    ```
- Copy formation-angular/resources/modules/core content to /src/app/core
- Update AppModule
    ```typescript
    // path: src/app/app.module.ts

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { CoreModule } from './core/core.module';
    import { AppRoutingModule } from './app-routing.module';

    import { MzNavbarModule, MzInputModule, MzButtonModule, MzValidationModule, MzSpinnerModule } from 'ngx-materialize';
    import { TableModule } from 'primeng/table';
    import { BreadcrumbModule } from 'primeng/breadcrumb';
    import { DialogModule } from 'primeng/dialog';

    import { AppComponent } from './app.component';
    import { UserComponent } from './user/user.component';
    import { UserDetailComponent } from './user/user-detail/user-detail.component';
    import { HomeComponent } from './home/home.component';
    import { NavbarComponent } from './navbar/navbar.component';
    import { UserNewComponent } from './user/user-new/user-new.component';
    import { UserEditComponent } from './user/user-edit/user-edit.component';
    import { UserDeleteComponent } from './user/user-delete/user-delete.component';

    @NgModule({
        declarations: [
            AppComponent,
            UserComponent,
            UserDetailComponent,
            HomeComponent,
            NavbarComponent,
            UserNewComponent,
            UserEditComponent,
            UserDeleteComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            CoreModule,
            AppRoutingModule,
            MzNavbarModule,
            MzInputModule,
            MzButtonModule,
            MzValidationModule,
            MzSpinnerModule,
            TableModule,
            BreadcrumbModule,
            DialogModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```
- Create "resources" directory under /src/assets and copy in it following files
    * formation-angular/resources/settings.hjson
    * formation-angular/resources/resources.hjson
    
- Install hjson package:
    ```bash
    npm install --save hjson os
    ```
- Inject SettingsService into UserService and Update HTTP calls
    ```typescript
    // path: src/app/user/user.service.ts

    constructor(
        private http: HttpClient,
        private settingsService: SettingsService,
    ) { }

    getUsers(): Observable<User[]> {
        return this.http
        .get(`${this.settingsService.config.apiUrl}/api/User`)
        .pipe(
            map((resp) => resp as User[]),
            catchError(this.handleError)
        );
    }

    getUser(id: number): Observable<User> {
        return this.http
        .get(`${this.settingsService.config.apiUrl}/api/User/${id}`)
        .pipe(
            map((resp) => resp as User),
            catchError(this.handleError)
        );
    }

    createUser(user: User): Observable<any> {
        return this.http
        .post(`${this.settingsService.config.apiUrl}/api/User`, user)
        .pipe(catchError(this.handleError))
    }

    updateUser(user: User): Observable<any> {
        return this.http
        .put(`${this.settingsService.config.apiUrl}/api/User/${user.id}`, user)
        .pipe(catchError(this.handleError))
    }

    deleteUser(id: number): Observable<any> {
        return this.http
        .delete(`${this.settingsService.config.apiUrl}/api/User/${id}`)
        .pipe(catchError(this.handleError))
    }
    ```
</details>

## 12. [Step13] SharedModule
<details>
  <summary>Click to expand!</summary>
  
- Generate SharedModule
    ```bash
    ng generate module shared
    ```
- Copy formation-angular/resources/modules/shared content to /src/app/shared
- Update AppModule
    ```typescript
    // path: src/app/app.module.ts

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { CoreModule } from './core/core.module';
    import { SharedModule } from './shared/shared.module';
    import { AppRoutingModule } from './app-routing.module';

    import { AppComponent } from './app.component';
    import { UserComponent } from './user/user.component';
    import { UserDetailComponent } from './user/user-detail/user-detail.component';
    import { HomeComponent } from './home/home.component';
    import { UserNewComponent } from './user/user-new/user-new.component';
    import { UserEditComponent } from './user/user-edit/user-edit.component';
    import { UserDeleteComponent } from './user/user-delete/user-delete.component';

    @NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailComponent,
        HomeComponent,
        UserNewComponent,
        UserEditComponent,
        UserDeleteComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```
- Remove existing navbar directory
- Append global Spinner HTML tag
    ```html
    <!-- path: src/app/app.component.html -->
    ...

    <app-spinner></app-spinner>
    ```
</details>

## 13. [Step14] Feature Modules
<details>
  <summary>Click to expand!</summary>
  
- Create "features" directory under src/app
- Generate UserModule with routing
    ```bash
    ng generate module features/user --routing
    ```
- Create "components", "models" and "services" directories under src/app/features/user/
- Move src/app/user/user.ts to src/app/features/user/models
- Move src/app/user/user.service.ts to src/app/features/user/services
- Move the remaining content to src/app/features/user/
- Remove old src/app/user directory
- Update UserModule
    ```typescript
    // path src/app/features/user/user.module.ts

    import { NgModule } from '@angular/core';
    import { SharedModule } from './../../shared/shared.module';

    import { UserRoutingModule } from './user-routing.module';

    import { UserComponent } from './components/user.component';
    import { UserDetailComponent } from './components/user-detail/user-detail.component';
    import { UserNewComponent } from './components/user-new/user-new.component';
    import { UserEditComponent } from './components/user-edit/user-edit.component';
    import { UserDeleteComponent } from './components/user-delete/user-delete.component';

    @NgModule({
        imports: [
            SharedModule,
            UserRoutingModule
        ],
        declarations: [
            UserComponent,
            UserDetailComponent,
            UserNewComponent,
            UserEditComponent,
            UserDeleteComponent
        ]
    })
    export class UserModule { }
    ```
- Update UserRoutingModule
    ```typescript
    // path src/app/features/user/user-routing.module.ts

    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    import { UserComponent } from './components/user.component';
    import { UserDetailComponent } from './components/user-detail/user-detail.component';
    import { UserNewComponent } from './components/user-new/user-new.component';
    import { UserEditComponent } from './components/user-edit/user-edit.component';

    const userRoutes: Routes = [
        { path: '', component: UserComponent },
        { path: ':id', component: UserDetailComponent },
        { path: 'add/new', component: UserNewComponent },
        { path: 'edit/:id', component: UserEditComponent },
    ];

    @NgModule({
        imports: [RouterModule.forChild(userRoutes)],
        exports: [RouterModule]
    })
    export class UserRoutingModule { }
    ```
- Generate HomeModule with routing
    ```bash
    ng generate module features/home --routing
    ```
- Create "components" directory under src/app/features/home/
- Move src/app/home content to src/app/features/home/components
- Remove old src/app/home directory
- Update HomeModule
    ```typescript
    // path src/app/features/home/home.module.ts

    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    import { HomeRoutingModule } from './home-routing.module';

    import { HomeComponent } from './components/home.component';

    @NgModule({
        imports: [
            CommonModule,
            HomeRoutingModule
        ],
        declarations: [HomeComponent]
    })
    export class HomeModule { }
    ```
- Update HomeRoutingModule
    ```typescript
    // path src/app/features/home/home-routing.module.ts

    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    import { HomeComponent } from './components/home.component';

    const homeRoutes: Routes = [
        {
            path: '',
            component: HomeComponent
        }
    ];

    @NgModule({
        imports: [RouterModule.forChild(homeRoutes)],
        exports: [RouterModule]
    })
    export class HomeRoutingModule { }
    ```
- Update AppModule
    ```typescript
    // path src/app/app.module.ts

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { CoreModule } from './core/core.module';
    import { SharedModule } from './shared/shared.module';

    import { AppRoutingModule } from './app-routing.module';

    import { AppComponent } from './app.component';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            CoreModule,
            SharedModule,
            AppRoutingModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```
- Update AppRoutingModule with lazy loading of the newly generated feature modules
    ```typescript
    // path src/app/app-routing.module.ts

    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    const routes: Routes = [
        {
            path: 'home',
            loadChildren: './features/home/home.module#HomeModule'
        },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        {
            path: 'user',
            loadChildren: './features/user/user.module#UserModule'
        },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    })
    export class AppRoutingModule { }
    ```
</details>

## 14. [Step15] Login And Register Modules
<details>
  <summary>Click to expand!</summary>
  
- Generate LoginModule with routing under features directory
    ```bash
    ng generate module features/login --routing
    ```
- Generate LoginComponent
    ```bash
    ng generate component features/login/components/login --flat --module=login
    ```
    ```typescript
    // path: src/app/features/login/components/login.component.ts

    import { Component, OnInit } from '@angular/core';
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    import { Router } from '@angular/router';

    import { AuthService } from './../../../core/services/auth.service';
    import { ResourcesService } from './../../../core/services/resources.service';
    import { Auth } from './../../../core/models/auth';

    /**
    * Login Componenet
    *
    * @export
    * @class LoginComponent
    * @implements {OnInit}
    */
    @Component({
        templateUrl: './login.component.html'
    })
    export class LoginComponent implements OnInit {
        rsc: any;
        form: FormGroup;
        errorMessage: any;

        /**
        * Creates an instance of LoginComponent.
        * @param {Router} router
        * @param {FormBuilder} fb
        * @param {ResourcesService} rscService
        * @param {AuthService} authService
        * @memberof LoginComponent
        */
        constructor(
            private router: Router,
            private fb: FormBuilder,
            private rscService: ResourcesService,
            private authService: AuthService
        ) { }

        /**
        * Component Init
        *
        * @memberof LoginComponent
        */
        ngOnInit() {
            this.loadResources();
            this.createForm();
        }

        /**
        * Load resources
        *
        * @memberof LoginComponent
        */
        loadResources() {
            this.rsc = this.rscService.rsc.pages.login;
        }

        /**
        * Create Login From
        *
        * @memberof LoginComponent
        */
        createForm() {
            this.form = this.fb.group(new Auth());
            this.form.controls.username.setValidators([Validators.required]);
            this.form.controls.password.setValidators([Validators.required]);
        }

        /**
        * Login to the app.
        *
        * @memberof LoginComponent
        */
        onSubmit() {
            this.authService.check(this.form.value)
            .subscribe(
                () => this.router.navigate(['home']),
                (error) => this.errorMessage = error
            );
        }

        /**
        * Go to register page.
        *
        * @memberof LoginComponent
        */
        register() {
            this.router.navigate(['register']);
        }
    }
    ```
    ```html
    <!-- path: src/app/features/login/components/login.component.html -->

    <div class="container">
        <h3>{{ rsc.title }}</h3>
        <div class="divider"></div>

        <h2>{{ rsc.subTitle }}</h2>

        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div *ngIf="errorMessage" class="card-panel red lighten-1">{{ errorMessage }}</div>

            <div class="row">
                <mz-input-container class="col s12 m12">
                    <input mz-input type="text" [formControl]="form.controls.username" [label]="rsc.loginPLH" [placeholder]="rsc.loginPLH" />
                </mz-input-container>

                <mz-input-container class="col s12 m12">
                    <input mz-input type="password" [formControl]="form.controls.password" [label]="rsc.loginPLH" [placeholder]="rsc.passwordPLH" />
                </mz-input-container>
            </div>

            <button mz-button class="left">{{ rsc.buttons.connect }}</button>
            <button mz-button class="right blue" type="button" (click)="register()">{{ rsc.buttons.register }}</button>
        </form>
    </div>
    ```
- Update LoginRoutingModule
    ```typescript
    // path: src/app/features/login/login-routing.module.ts

    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { LoginComponent } from './components/login.component';

    const loginRoutes: Routes = [
        {
            path: '',
            component: LoginComponent
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forChild(loginRoutes)
        ],
        exports: [RouterModule]
    })
    export class LoginRoutingModule { }
    ```
- Update LoginModule
    ```typescript
    // path: src/app/features/login/login.module.ts

    import { NgModule } from '@angular/core';
    import { SharedModule } from './../../shared/shared.module';
    import { LoginRoutingModule } from './login-routing.module';
    import { LoginComponent } from './components/login.component';

    @NgModule({
        imports: [
            SharedModule,
            LoginRoutingModule
        ],
        declarations: [LoginComponent]
    })
    export class LoginModule { }
    ```
- Generate RegisterModule with routing under features directory
    ```bash
    ng generate module features/register --routing
    ```
- Generate RegisterComponent
    ```bash
    ng generate component features/register/components/register --flat --module=register
    ```
    ```typescript
    // path: src/app/features/register/components/register.component.ts

    import { Component, OnInit } from '@angular/core';
    import { FormGroup, FormBuilder, Validators } from '@angular/forms';
    import { Router } from '@angular/router';

    // Services
    import { NotifierService } from 'angular-notifier';
    import { MixinService } from '../../../core/services/mixin.service';
    import { ResourcesService } from '../../../core/services/resources.service';
    import { AuthService } from '../../../core/services/auth.service';

    @Component({
        templateUrl: './register.component.html'
    })
    export class RegisterComponent implements OnInit {
        rsc: any;
        registerForm: FormGroup;

        constructor(
            private router: Router,
            private fb: FormBuilder,
            private notifier: NotifierService,
            private mixinService: MixinService,
            private rscService: ResourcesService,
            private authService: AuthService
        ) { }

        ngOnInit() {
            this.loadResources();
            this.loadForm();
        }

        loadResources() {
            this.rsc = this.rscService.rsc.pages.register;
        }

        loadForm() {
            if (this.registerForm) { this.registerForm.reset(); }
            this.registerForm = this.fb.group({
                username: ['', Validators.required],
                password: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                firstname: ['', Validators.required],
                lastname: ['', Validators.required],
            });
        }

        cancel() {
            this.router.navigate(['home']);
        }

        save() {
            this.authService.register(this.registerForm.value)
                .subscribe(
                    () => {
                        this.notifier.notify('success', 'Operation successfully done');
                        this.router.navigate(['login']);
                    });
        }
    }
    ```
    ```html
    <!-- path: src/app/features/register/components/register.component.html -->

    <div class="container">
        <h3>{{ rsc.title }}</h3>
        <div class="divider"></div>
        <h2>{{ rsc.subTitle }}</h2>
        <form [formGroup]="registerForm" (ngSubmit)="save()" novalidate>
            <div class="row">
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="username" formControlName="username" type="text" [errorMessageResource]="rsc.validation.username" [label]="rsc.usernamePLH" [placeholder]="rsc.usernamePLH" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="password" formControlName="password" type="password" [errorMessageResource]="rsc.validation.password" [label]="rsc.passwordPLH" [placeholder]="rsc.passwordPLH" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="email" formControlName="email" type="text" [errorMessageResource]="rsc.validation.email" [label]="rsc.email" [placeholder]="rsc.email" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="firstname" formControlName="firstname" type="text" [errorMessageResource]="rsc.validation.firstname" [label]="rsc.firstname" [placeholder]="rsc.firstname" />
                </mz-input-container>
                <mz-input-container class="col s12 m12">
                    <input mz-input mz-validation required id="lastname" formControlName="lastname" type="text" [errorMessageResource]="rsc.validation.lastname" [label]="rsc.lastname" [placeholder]="rsc.lastname" />
                </mz-input-container>
            </div>
            <button mz-button class="blue-grey lighten-1" (click)="cancel()" type="button">{{ rsc.buttons.cancel }}</button>
            <button mz-button [disabled]="!registerForm.valid" type="submit">{{ rsc.buttons.save }}</button>
        </form>
    </div>
    ```
- Update RegisterRoutingModule
    ```typescript
    // path: src/app/features/register/register-routing.module.ts

    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { RegisterComponent } from './components/register.component';

    const registerRoutes: Routes = [
        {
            path: '',
            component: RegisterComponent
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forChild(registerRoutes)
        ],
        exports: [RouterModule]
    })
    export class RegisterRoutingModule { }
    ```
- Update RegisterModule
    ```typescript
    // path: src/app/features/register/register.module.ts

    import { NgModule } from '@angular/core';
    import { SharedModule } from './../../shared/shared.module';
    import { RegisterRoutingModule } from './register-routing.module';
    import { RegisterComponent } from './components/register.component';

    @NgModule({
        imports: [
            SharedModule,
            RegisterRoutingModule
        ],
        declarations: [RegisterComponent]
    })
    export class RegisterModule { }
    ```
- Update AppRoutingModule and load lazily the newly generated modules
    ```typescript
    // path: src/app/app-routing.module.ts

    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    const routes: Routes = [
        {
            path: 'home',
            loadChildren: './features/home/home.module#HomeModule',
        },
        {
            path: 'user',
            loadChildren: './features/user/user.module#UserModule',
        },
        {
            path: 'register',
            loadChildren: './features/register/register.module#RegisterModule',
        },
        {
            path: 'login',
            loadChildren: './features/login/login.module#LoginModule',
        },
        {
            path: '', redirectTo: '/login', pathMatch: 'full'
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    })
    export class AppRoutingModule { }
    ```
- Add fallback route for unknown routes
    ```typescript
    // path: src/app/app-routing.module.ts

    const routes: Routes = [
        ...
        {
            path: '**',
            redirectTo: '/home'
        }
    ];
    ```
- Add JWT Authentication Guards (CanActivate)
    ```typescript
    // path: src/app/app-routing.module.ts

    const routes: Routes = [
        {
            path: 'home',
            loadChildren: './features/home/home.module#HomeModule',
            canActivate: [AuthGuard]
        },
        {
            path: 'user',
            loadChildren: './features/user/user.module#UserModule',
            canActivate: [AuthGuard]
        },
        ...
    ];
    ```
- Generate User module Guard
    ```bash
    ng generate guard features/user/services/user
    ```
    ```typescript
    // path: src/app/features/user/services/user.guard.ts

    import { Injectable } from '@angular/core';
    import { CanDeactivate } from '@angular/router';

    import { UserNewComponent } from './../components/user-new/user-new.component';
    import { UserEditComponent } from './../components/user-edit/user-edit.component';

    @Injectable({
        providedIn: 'root'
    })
    export class UserGuard implements CanDeactivate<UserNewComponent | UserEditComponent> {

        /**
        * Creates an instance of UserGuardService.
        * @memberof UserGuardService
        */
        constructor() { }

        /**
        * Indicates if a route can be deactivated
        *
        * @param {(UserNewComponent | UserEditComponent)} target
        * @returns
        * @memberof UserGuardService
        */
        canDeactivate(target: UserNewComponent | UserEditComponent) {
            if (!target.isFormSaved) { return window.confirm('Etes-vous sûr de vouloir annuler votre saisie ?'); }
            return true;
        }
    }
    ```
- Update UserNewComponent by adding public "isFormSaved" property
    ```typescript
    // path: src/app/features/user/components/user-new/user-new.component.ts

    ...
    public isFormSaved: boolean;

    ...
    save() {
        this.userService.createUser(this.newForm.value)
        .subscribe(
            resp => {
                this.isFormSaved = true;
                this.notifier.notify('success', 'Operation successfully done !');
                this.router.navigate(['user', resp.id]);
            }
        );
    }
    ```
- Update UserEditComponent by adding public "isFormSaved" property
    ```typescript
    // path: src/app/features/user/components/user-edit/user-edit.component.ts

    ...
    public isFormSaved: boolean;

    ...
    save() {
        this.userService.updateUser(<User>this.editForm.value)
        .subscribe(
            resp => {
                this.isFormSaved = true;
                this.notifier.notify('success', 'Operation successfully done !');
                this.router.navigate(['user', resp.id]);
            }
        );
    }
    ```
- Update UserRoutingModule
    ```typescript
    // path: src/app/features/user/user-routing.module.ts

    const userRoutes: Routes = [
        ...
        { path: 'add/new', component: UserNewComponent, canDeactivate: [UserGuard] },
        { path: 'edit/:id', component: UserEditComponent, canDeactivate: [UserGuard] },
    ];
    ```
</details>

## 15. [Step16] IndexModule as portal (second RouterOutlet)
<details>
  <summary>Click to expand!</summary>
  
  - Generate IndexModule with routing
    ```bash
    ng generate module features/index --routing
    ```
- Generate IndexComponent
    ```bash
    ng generate component features/index/index --flat --module=index
    ```
- Update IndexModule
    ```typescript
    // path: src/app/features/index/index.module.ts

    import { NgModule } from '@angular/core';
    import { SharedModule } from './../../shared/shared.module';

    import { IndexRoutingModule } from './index-routing.module';
    import { IndexComponent } from './index.component';

    @NgModule({
    declarations: [IndexComponent],
    imports: [
        SharedModule,
        IndexRoutingModule
    ]
    })
    export class IndexModule { }
    ```
- Move user and home folders to src/app/features/index and update imports paths
- Update AppRoutingModule
    ```typescript
    // path: src/app/app-routing.module.ts

    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    const routes: Routes = [
        {
            path: '',
            loadChildren: './features/index/index.module#IndexModule',
        },
        {
            path: 'register',
            loadChildren: './features/register/register.module#RegisterModule',
        },
        {
            path: 'login',
            loadChildren: './features/login/login.module#LoginModule',
        },
        {
            path: '', redirectTo: '/login', pathMatch: 'full'
        },
        {
            path: '**',
            redirectTo: '/home'
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    })
    export class AppRoutingModule { }
    ```
- Set up IndexRoutingModule children routes and guard
    ```typescript
    // path: src/app/features/index/index-routing.module.ts

    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { IndexComponent } from './index.component';
    import { AuthGuard } from './../../core/services/auth.guard';

    const indexRoutes: Routes = [
        {
            path: '',
            component: IndexComponent,
            canActivateChild: [AuthGuard],
            children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule',
            },
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule',
            }
            ]
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forChild(indexRoutes)
        ],
        exports: [RouterModule]
    })
    export class IndexRoutingModule { }
    ```
- Set up IndexComponent template with the second RouterOutlet and semantic tags
    ```html
    <!-- path: src/app/features/index/index.component.html -->

    <!-- ============================================================== -->
    <!-- Navigation  -->
    <!-- ============================================================== -->
    <header>
        <app-navbar></app-navbar>
    </header>
    <!-- ============================================================== -->
    <!-- End navigation  -->
    <!-- ============================================================== -->


    <!-- ============================================================== -->
    <!-- Page wrapper  -->
    <!-- ============================================================== -->
    <main>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    </main>
    <!-- ============================================================== -->
    <!-- End Page wrapper  -->
    <!-- ============================================================== -->


    <!-- ============================================================== -->
    <!-- footer -->
    <!-- ============================================================== -->
    <footer>
        <app-footer></app-footer>
    </footer>
    <!-- ============================================================== -->
    <!-- End footer -->
    <!-- ============================================================== -->
    ```
- Clean up and remove the Navbar Html tag from AppComponent template
    ```html
    <!-- path: src/app/app.component.html -->

    <router-outlet></router-outlet>
    <app-spinner></app-spinner>
    <notifier-container></notifier-container>
    ```
</details>

## 16. Compilation and Build
<details>
  <summary>Click to expand!</summary>
  
### Compilation
Une application Angular se compose principalement de Components et de leurs Templates HTML, qui sont convertis en JavaScript exécutable par le compilateur Angular.
* Just-in-Time (JIT) --> par défaut : Compile l'application dans le navigateur lors de l'exécution du Javascript
    ```bash
    ng build
    ng serve
    ng build --prod --aot false --build-optimizer false
    ```
* Ahead-of-Time (AOT) : Compile l'application au moment de la construction du Javascript
    ```bash
    ng build --aot
    ng serve --aot
    ng build --prod (--prod compile avec AOT par défaut)
    ```
    - Rendu plus rapide: le navigateur télécharge une version précompilée de l'application, puis exécute directement sans attendre la compilation
    - Moins de requêtes asynchrones: l'HTML et les CSS sont integrés dans le JavaScript, éliminant les requêtes ajax séparées pour charger ces ressources
    - La taille baisse: il n'est plus necéssaire de charger le compilateur Angular par le navigateur car l'application est compliée (le compilateur c'est 50% d'Angular)
    - AOT détecte et signale les erreurs de binding Template/Component lors de la génération avant de les voir dans la console du navigateur.

### Build
* Environnement hors production:
    ```bash
    ng build --base-href=/my/app/ --configuration=staging
    ```
    Si les fichiers de déploiment doivent être copiés dans un sous-dossier du serveur web, il faut préciser la base href

* Environnement de production :
    ```bash
    ng build --base-href=/my/app/ --prod
    ng build --base-href=/my/app/ --prod --build-optimizer
    ng build --base-href=/my/app/ --prod --aot false --build-optimizer false
    ```
    * --prod :
        - Compilation AOT
        - Déactivation des contrôles spécifiques au développement
        - Concatènation des nombreux fichiers d'application en quelques paquets
        - Minification: supprime les espaces, les commentaires.
        - Uglification: réécrit le code pour utiliser des noms de variables et de fonctions courts
        - Élimination du code mort et des imports inutilent avec le mécanisme de Tree-shaking

    * --build-optimizer (par défaut avec AOT) : permet de réduire la taille des bundles JavaScript générés

</details>