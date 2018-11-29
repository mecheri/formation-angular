# Tuto Steps

00. Generating an Angular project
    ```bash
    ng new MY-PROJECT-NAME --style=scss
    ```

01. Initial configuration (Packages / Styles / Fonts)
    - Copy Step02/src/sass directory to Step01/src
    - Set this as styles property in angular.json file:
        ```javascript
        "styles": [
            "src/sass/app.scss"
        ],
        ```
    - Install ngx-materialize:
        ```bash
        npm install --save ngx-materialize
        ```
    - Copy Step02/src/sass directory to Step01/src
    - Install jquery and it's types
        ```bash
        npm install --save jquery @types/jquery
        ```
    - Install primeng and it's icons
        ```bash
        npm install --save primeng@6.1.0 primeicons
        ```
    - Set this as scripts property in angular.json file:
        ```javascript
        "scripts": [
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/materialize-css/dist/js/materialize.min.js"
        ]
        ```

02. User component
    - Generate UserComponent
        ```bash
        ng generate component user
        ```
    - Clean the AppComponent template
        ```html
        <div style="text-align:center">
            <h1>
                Welcome to {{ title }}!
            </h1>
            <img width="100" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
        </div>

        <app-user></app-user>
        ```
    - Create User class:
        ```typescript
        // path: src/app/user/user.ts
        export class User {
            id: number;
            username: string;
            password: string;
            email: string;
            firstname: string;
            lastname: string;
            birthdate: Date;
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
        image = 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';
        ```
        ```html
            <!-- path: src/app/user/user.component.ts -->
        <div style="text-align:center">
            <img width="100" alt="property as one-way binding" [src]="image">
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
        <!-- path: src/app/user/user.component.ts -->
        <!-- Pipes -->
        <div><span>birth date: </span>{{user.birthdate | date}}</div>
        <div><span>birth date: </span>{{user.birthdate | date: "MM/dd/yy"}}</div>
        <div><span>birth date: </span>{{user.birthdate | date: dateFormat}}</div>
        <div><span>birth date: </span>{{user.birthdate | date | uppercase}}</div>
        <div>Exponentielle: {{2 | exponential: 2}}</div>
        ```
    - Generate and apply custom pipe:
        ```bash
        ng generate pipe exponential
        ```
        ```typescript
        // path: src/app/user/user.component.ts
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
        <!-- path: src/app/user/user.component.ts -->
        <div>Exponentielle: {{2 | exponential: 2}}</div>
        ```

03. User component Lifecycle Hooks
    - Remove exponential.pipe.ts and exponential.pipe.spec.ts
    - Clean the UserComponent template:
        ```html
        <!-- path: src/app/user/user.component.ts -->
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
        @Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })
        export class UserComponent implements OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
        ```
    - OnChanges:
        ```typescript
        // path: src/app/user/user.component.ts
        ngOnChanges(changes: SimpleChanges) {
            console.log('---> OnChanges Can\'t fire here <---');
        }
        ```
    - OnInit:
        ```typescript
        // path: src/app/user/user.component.ts
        ngOnInit() {
            console.log('---> OnInit fires <---');
        }
        ```
    - AfterViewInit, Renderer, ViewChild (HTML input auto-focus):
         ```typescript
        // path: src/app/user/user.component.ts
        @ViewChild('input') input;
        constructor(private renderer: Renderer) { }
        ngAfterViewInit() {
            console.log('---> AfterViewInit fires <---');
            this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
        }
        ```
        ```html
        <!-- path: src/app/user/user.component.ts -->
        <div style="text-align:center">
            <img width="100" alt="property as one-way binding" [src]="image">
            <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
            <div><span>id: </span>{{user.id}}</div>
            <div><span>email: </span>{{user.email}}</div>
            <div><span>birth date: </span>{{user.birthdate}}</div>

            <!-- AfterViewInit Hook -->
            <div style="margin: 2% 5% 0 5%;display:inline-block;">
                <input #input type="text" placeholder="Test input for auto-focus">
            </div>
        </div>
        ```
    - AfterViewChecked:
        ```typescript
        ngAfterViewChecked() {
            console.log('---> AfterViewChecked fires <---');
        }
        ```
    - OnDestroy:
        ```typescript
        // path: src/app/user/user.component.ts
        ngOnDestroy() {
            console.log('---> OnDestroy fires <---');
        }
        ```

04. User editor
    - Replace UserComponent template content by this:
        ```html
        <!-- path: src/app/user/user.component.ts -->
        <div style="text-align:center">
            <img width="100" alt="property as one-way binding" [src]="image">
            <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
            <div><span>id: </span>{{user.id}}</div>
            <div><span>email: </span>{{user.email}}</div>
            <div><span>birth date: </span>{{user.birthdate}}</div>

            <div style="margin: 2% 5% 0 5%;display:inline-block;">
                <!-- AfterViewInit Hook -->
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
    - Two-way binding

05. Display a List of users
    - Clean the UserComponent class:
        ```typescript
        import { Component, OnInit } from '@angular/core';
        import { User } from './user';

        @Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })
        export class UserComponent implements OnInit {
            image = 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';

            constructor() { }

            ngOnInit() { }
        }
        ```
    - Clean the UserComponent template:
        ```html
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
                email: 'mehdi.mecheri@viveris.fr',
                firstname: 'Mehdi',
                lastname: 'Mecheri',
                birthdate: new Date(2018, 5, 22)
            },
            {
                id: 2,
                email: 'lionel.messi@barca.es',
                firstname: 'Lionel',
                lastname: 'Messi',
                birthdate: new Date(2018, 5, 22)
            },
            {
                id: 3,
                email: 'cristiano.ronaldo@real.es',
                firstname: 'Cristiano',
                lastname: 'Ronaldo',
                birthdate: new Date(2018, 5, 22)
            },
            {
                id: 4,
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
        ...
        users: User[];

        ngOnInit() {
            this.users = USERS;
        }
        ```
    - Display users with *ngFor (structural directive)
        ```html
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
                <!-- TODO: Display user detail on select one -->
            </div>
        </div>
        ```
    - One-way binding: event binding (from-the-dom)
        ```html
        <li *ngFor="let user of users" (click)="onSelect(user)">
            <span>{{user.id}} - {{user.firstname}} {{user.lastname}} </span>
        </li>
        ```
        ```typescript
        selectedUser: User;
        onSelect(user: User): void {
            this.selectedUser = user;
        }
        ```
    - Display the user detail -> Error before selecting user !!!
        ```html
        <div class="col m8">
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
                // ElementRef permet d'acceder un element natif du DOM
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
            // path: src/app/highlight.directive.ts
            import { Directive, Input, ElementRef, HostListener } from '@angular/core';

            @Directive({
                selector: '[appInputMaxLength]'
            })
            export class InputMaxLengthDirective {

                @Input() appInputMaxLength: string;

                constructor(private el: ElementRef) { }
                    @HostListener('keypress', ['$event']) onMouseEnter($event: any) {
                        if ($event.srcElement.value.length === this.appInputMaxLength) {
                        $event.preventDefault();
                        }
                    }
                }
            ```
            ```html
            <!-- path: src/app/user.component.html -->
            <input type="text" [(ngModel)]="selectedUser.firstname" [appInputMaxLength]="30">
            ```

06. User detail component (child component)
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
            <!-- TODO: invoke user detail tag -->
        </div>
        ```
    - Generate UserDetailComponent
        ```bash
        ng generate component /user/userDetail
        ```
        ```html
        <!-- path: src/app/user/user-detail/user-detail.component.html -->
        <div *ngIf="user" class="col m8">
            <br>
            <img width="100" alt="property as one-way binding" [src]="image">
            <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
            <div><span>id: </span>{{user.id}}</div>
            <input type="text" [(ngModel)]="user.firstname" [appInputMaxLength]="30">
            <input type="text" [(ngModel)]="user.lastname">
            <input type="text" [(ngModel)]="user.email">
        </div>
        ```

    - Display user detail --> nothing happens !!! it's normal
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
            <!-- user detail tag -->
            <app-user-detail></app-user-detail>
        </div>
        ```
    - Components interaction
        1. Interaction 01: Parent->child via @Input
            ```typescript
            // path: src/app/user/user-detail/user-detail.component.ts
            import { Component, OnInit, Input } from '@angular/core';
            import { User } from '../user';
            ...
            @Input() user: User;
            @Input('avatar') image: User;

            constructor() { }
            ...
            ```
            ```html
            <!-- path: src/app/user/user-detail/user-detail.component.html -->
            <app-user-detail [user]="selectedUser" [avatar]="image"></app-user-detail>
            ```
        2. Interaction 02: Parent->child via @Input Setter
            ```typescript
            // path: src/app/user/user.component.ts
            image2 = '               https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';

            // path: src/app/user/user-detail/user-detail.component.ts
            private _image2 = '';
            @Input('avatar2') set image2(data: string) {
                this._image2 = (data && data.trim()) || '<no data found>';
            }
            get image2(): string { return this._image2; }
            ```
            ```html
            <!-- path: src/app/user/user.component.html -->
            <app-user-detail [user]="selectedUser" [avatar]="image" [avatar2]="image2"></app-user-detail>

            <!-- path: src/app/user-detail/user-detail.component.html -->
            <img width="100" alt="property as one-way binding" [src]="image2">
            ```
        3. Interaction 03: Parent->child via ngOnChanges()
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
        4. Interaction 04: Child  -> parent via @Output
            ```typescript
            // path: src/app/user/user-detail/user-detail.component.ts
            import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
            ...
            @Output() onAction = new EventEmitter<string>();
            action(msg: string) {
                this.onAction.emit(msg);
            }
            ...

            // path: src/app/user/user.component.ts
            ...
            onActionFromUserDetail(msg: string) {
                console.log(msg);
            }
            ...
            ```
            ```html
            <!-- path: src/app/user/user-detail/user-detail.component.html -->
            <button (click)="action('Hello from User-detail-component @Output')">Hello</button>

            <!-- path: src/app/user/user.component.html -->
            <app-user-detail [user]="selectedUser" [avatar]="image" (onAction)="onActionFromUserDetail($event)"></app-user-detail>
            ```
        5. Interaction 05: Parent -> child via Local variable
            ```typescript
            // path: src/app/user/user-detail/user-detail.component.ts
            public hello = 'Hello from User-detail-component local variable';
            ```
            ```html
            <!-- path: src/app/user/user.component.html -->
            <app-user-detail #localVar [user]="selectedUser" [avatar]="image"></app-user-detail>
            <span>{{ localVar.hello }}</span>
            ```
        6. Interaction 06: Parent -> child via @ViewChild()
            ```typescript
            // path: src/app/user/user.component.ts
            import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
            import { UserDetailComponent } from './user-detail/user-detail.component';
            ...
            export class UserComponent implements OnInit, AfterViewInit {
                ...
                @ViewChild(UserDetailComponent) ud: UserDetailComponent;
                ngAfterViewInit() {
                    if (this.ud) {
                    console.log(this.ud.hello);
                    }
                }
                ...
            }
            ```
        7. Interaction 07: Parent <-> child via Service
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
                //  * Simple Observable with only one Obeserver
                // Subject:
                //  * Special type of Observable
                //  * Multiple observers listen to data
                //  * Proxy between Observable and Observer
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

            // path: src/app/user/user.component.ts
            import { Interaction07Service } from '../interaction07.service';

            constructor(private service: Interaction07Service) {
                service.broadcastChildStream$.subscribe((dataFromChild) => console.log(dataFromChild));
            }

            broadcastParent() {
                this.service.broadcastParent('Hello from parent');
            }

            // path: src/app/user/user-detail/user-detail.component.ts
            import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy} from '@angular/core';
            import { Subscription } from 'rxjs';
            import { Interaction07Service } from '../../interaction07.service';

            export class UserDetailComponent implements OnChanges, OnInit, OnDestroy {
                ...
                subscription: Subscription;
                constructor(private service: Interaction07Service) {
                    this.subscription = service.broadcastParentStream$.subscribe((dataFromParent) => console.log(dataFromParent));
                }

                ngOnDestroy() {
                    this.subscription.unsubscribe(); // prevent memory leak
                }
            }
            ```

            ```html
            <!-- path: src/app/user/user.component.html -->
            <button (click)="broadcastParent()">BROADCAST PARENT</button>

            <!-- path: src/app/user/user-detail/user-detail.component.html -->
            <button (click)="broadcastChild()">BROADCAST CHILD</button>
            ```

07. User service
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

            image = 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';

            constructor() {}

            ngOnInit() {
                this.users = USERS;
            }

            onSelect(user: User): void {
                this.selectedUser = user;
            }
        }


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

            <app-user-detail [user]="selectedUser" [avatar]="image"></app-user-detail>
        </div>

        <!-- path: src/app/user/user-detail/user-detail.component.html -->
        <div *ngIf="user" class="col m8">
            <br>
            <img width="100" alt="property as one-way binding" [src]="image">
            <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
            <div><span>id: </span>{{user.id}}</div>
            <input type="text" [(ngModel)]="user.firstname">
            <input type="text" [(ngModel)]="user.lastname">
            <input type="text" [(ngModel)]="user.email">
        </div>
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
        import { UserService } from './user.service';

        constructor(private userService: UserService) {}
        ```

    - Load users synchronously
        ```typescript
        // path: src/app/user/user.service.ts
        getUsers(): User[] {
            return USERS;
        }

        // path: src/app/user/user.component.ts
        users: User[];
        ngOnInit() {
            this.users = this.userService.getUsers();
            ...
        }
        ```
    - Load users asynchronously with Observables
        ```typescript
        // path: src/app/user/user.service.ts
        import { Observable, of } from 'rxjs';
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

        // path: src/app/user/user.component.ts
        usersAsync: User[];
        ngOnInit() {
            ...
            this.userService.getUsersAsync()
                .subscribe(
                    (data: User[]) => this.usersAsync = data,
                    (error) => console.log(error)
                );
        }
        ```
        ```html
        <!-- path: src/app/user/user.component.html -->
        <div *ngIf="usersAsync">
            <hr>
            <ul>
                <li *ngFor="let user of usersAsync" [class.active-line]="selectedUser && selectedUser.id === user.id" (click)="onSelect(user)">
                    <span>{{user.id}} - {{user.firstname}} {{user.lastname}}</span>
                </li>
            </ul>
        </div>
        ```
    - RxJS API demo

08. Routing
    - Generate AppRoutingModule
        ```bash
        ng generate module app-routing --flat
        ```
    - Export RouterModule from generated AppRoutingModule
        ```typescript
        // path: src/app/app-routing.module.ts
        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
        import { RouterModule } from '@angular/router';

        @NgModule({
            imports: [
                CommonModule
            ],
            exports: [
                RouterModule
            ]
        })
        export class AppRoutingModule { }
        ```
    - Generate HomeComponent
        ```bash
        ng generate component home
        ```
    - Add routes for user, userDetail and home components
        ```typescript
        // path: src/app/app-routing.module.ts
        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
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
                CommonModule,
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
    - Import created AppRoutingModule in AppModule
        ```typescript
        // path: src/app/app-routing.module.ts
        const routes: Routes = [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            ...
        ];
        ```
    - Move AppComponent template conetent to HomeComponent template without UserComponent tag
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
            title = 'app';
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
            ],
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
    - Clean UserService class
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
    - Error Missing BrowserAnimationsModule !!!
        ```typescript
            // path: src/app/app.module.ts
            import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

            imports: [
                ...
                BrowserAnimationsModule,
                ...
            ],
        ```
    - Navigate to the User detail -> nothing displayed !!!
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
        <div class="col m8">
            <br>
            <h2>{{ user.firstname }} {{ user.lastname }} Details : </h2>
            <div><span>id: </span>{{user.id}}</div>
            <input type="text" [(ngModel)]="user.firstname">
            <input type="text" [(ngModel)]="user.lastname">
            <input type="text" [(ngModel)]="user.email">
        </div>
        ```
    - Add function in UserService to get specific user by ID
        ```typescript
        // path: src/app/user/user.service.ts
        getUser(id: number): Observable<User> {
            return of(USERS.find(user => user.id === id));
        }
        ```
09. User CRUD
    - Generate User new, edit and delete Components and its route (ng generate component UserNew)
        ```bash
        ng generate component user/userNew
        ng generate component user/userEdit
        ng generate component user/userDelete
        ```
    - Add routes for newly generated components
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
    - Update UserDetailComponent
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

            getUser(): void {
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
                creationForm: FormGroup;

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
                    if (this.creationForm) { this.creationForm.reset(); }
                    this.creationForm = this.fb.group({ // <==> new FormGroup({ username: new FormControl() })
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

            <form [formGroup]="creationForm" (ngSubmit)="save()" novalidate>
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
                <button mz-button [disabled]="!creationForm.valid" type="submit">SAVE</button>
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
                userId: number;
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
                    this.route.params.subscribe(params => this.userId = +params['id']);
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
        this.creationForm = this.fb.group({
            ...
            firstname: ['', [Validators.required, forbiddenValidator(/test/i)]],
            ...
        });
        ...
        export function forbiddenValidator(nameRe: RegExp): ValidatorFn {
            return (control: AbstractControl): { [key: string]: any } => {
                const forbidden = nameRe.test(control.value);
                return forbidden ? { 'forbidden': { value: control.value } } : null;
            };
        }
        ```

10. HttpClient in the UserService
    - Enable Angular's HTTP services (HttpClientModule)
        ```typescript
        // path: src/app/app.module.ts
        import { HttpClientModule } from '@angular/common/http';
        ...
        imports: [
            ...
            HttpClientModule,
        ],
        ```
    - Inject HttpClient into UserService and remove USERS Mocks table
        ```typescript
        // path: src/app/user/user.service.ts
        import { HttpClient } from '@angular/common/http';
        ...
        constructor(private http: HttpClient) { }
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
    - Import appropriate RxJS classes and operators
        ```typescript
        // path: src/app/user/user.service.ts
        import { Observable, throwError } from 'rxjs';
        import { map, catchError } from 'rxjs/operators';
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
    - Install angular2-notification to handle notifications
        ```bash
        npm install --save angular2-notifications
        ```
    - Import angular2-notification in the AppModule
        ```typescript
        // path: src/app/app.module.ts
        import { SimpleNotificationsModule } from 'angular2-notifications';
        ...
        imports: [
            ...
            SimpleNotificationsModule,
        ],

        ```
    - Inject angular2-notifications service in the user's CRUD Components
        ```typescript
        import { NotificationsService } from 'angular2-notifications';
        
        constructor(
            ...
            private notifService: NotificationsService,
        ) { }
        ```
    - Update User's CRUD components HTTP calls
        ```typescript
        // path: src/app/user/user.component.ts
        getUsers() {
            this.userService.getUsers()
            .subscribe(
                (data: User[]) => this.users = data,
                error => this.notifService.error('Erreur', error)
            );
        }
        ```
        ```typescript
        // path: src/app/user/user-detail/user-detail.component.ts
        getUser(): void {
            const id = +this.route.snapshot.paramMap.get('id');
            this.userService.getUser(id)
            .subscribe(
                user => this.user = user,
                error => this.notifService.error('Erreur', error)
            );
        }
        ```
        ```typescript
        // path: src/app/user/user-new/user-new.component.ts
        save() {
            this.userService.createUser(this.creationForm.value)
            .subscribe(
                resp => {
                    this.notifService.success(null, 'Success', { timeOut: 3000 });
                    setTimeout(() => this.router.navigate(['user', resp.id]), 3000);
                },
                error => this.notifService.error('Erreur', error)
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
                error => this.notifService.error('Erreur', error)
            );
        }

        save() {
            this.userService.updateUser(<User>this.editForm.value)
            .subscribe(
                resp => {
                    this.notifService.success(null, 'Success', { timeOut: 3000 });
                    setTimeout(() => this.router.navigate(['user', resp.id]), 3000);
                },
                error => this.notifService.error('Erreur', error));
        }
        ```
        ```typescript
        // path: src/app/user/user-delete/user-delete.component.ts
        delete() {
            this.userService.deleteUser(this.user.id)
            .subscribe(
                resp => {
                    this.notifService.success(null, 'Success', { timeOut: 3000 });
                    setTimeout(() => this.onAction.emit(true), 3000);
                },
                error => this.notifService.error('Erreur', error));
        }
        ```
    - Add angular2-notifications HTML tag to User's CRUD components tempaltes
        ```html
        <!-- notify -->
        <simple-notifications></simple-notifications>
        ```
11. CoreModule
    - Create folder app/modules
    - Generate CoreModule (ng generate module modules/core)
    - Add factories
    - Add handlers
    - Add services
    - Add interceptors
    - Update AppModule
    - Add global application resources (res folder) and update angular.json configuration file

12. SharedModule
    - Generate SharedModule (ng generate module modules/shared)
    - Import and export CommonModule, ReactiveFormsModule
    - Add shared components (move Navbar component there)
    - Update CoreModule
    - Update AppModule

13. Home and User components in separated modules as FeatureModules
    - Generate UserModule and UserRoutingModule (ng generate module modules/user --routing)
    - Generate HomeModule and HomeRoutingModule (ng generate module modules/home --routing)
    - Move the user and home components into the generated modules
    - Update AppModule and AppRoutingModule
    - Add LazyLoading to both modules

14. Login And Register Modules
    - Add LoginModule, LoginRoutingModule and LoginComponent
    - Add RegisterModule, RegisterRoutingModule and RegisterComponent
    - Update AppRoutingModule
    - Add fallback route for unknown routes,
    - Add LazyLoading to both modules
    - Add JWT Security
    - Add Interceptors
    - Update Navbar by adding logout action and current user context
    - Add Authentication Guards (canActivate)
    - Add User's CRUD Forms Guards (canDeactivate)

15. IndexModule as a portal (Second RouterOutlet)
    - Generate IndexModule and IndexRoutingModule (ng generate module modules/index --routing)
    - Update AppRoutingModule
    - Load IndexModule lazily in AppRoutingModule
    - Load UserModule and HomeModule lazily in IndexRoutingModule
    - Add second RouterOutlet in the IndexComponent view
    - Move the Navbar Html tag from AppComponent view to the IndexComponent view
    - Update the AppComponent view (let only the RouterOutlet tag)