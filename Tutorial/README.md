# Tuto Steps

00. Generating  an Angular project (ng new)

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
            npm install --save jquery
            npm install --save @types/jquery
        ``` 
    - Install primeng and it's icons
        ```bash
            npm install --save primeng
            npm install --save primeicons
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
            <!-- AfterViewInit Hook -->
            <div style="margin: 2% 5% 0 5%;display:inline-block;">
                <input #input type="text" placeholder="Test input for auto-focus">
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
    - Update and clean the UserComponent view
    - Add Some Html Bootstrap classes (container-fluid, form-control)
    - Show Two-way binding
    - Missing FormsModule !!!
    - Import FormsModule in AppModule

05. Display a List of users
    - Update and clean the UserComponent class and view
    - Mock users
    - Display users with *ngFor (structural directive)
    - Show One-way binding: event binding (from-the-dom)
    - Display the user detail
    - Handle empty user detail with *ngIf (structural directive)
    - Generate and apply attributes directives (ng generate directive)

06. User detail component (child component)
    - Generate the UserDetailComponent (ng generate component User/UserDetail)
    - Update and clean the UserComponent class and view
    - Add @Input property
    - Display the user detail component
    - Show the different types of components interaction

07. User service
    - Clean Workspace (remove Pipes, Directives, Interaction07Service and update the User and UserDetail Components and AppModule)
    - Generate the UserService (ng g service User)
    - Add getUsers() function
    - Provide the generated UserService
    - Inject the UserService
    - Call it in ngOnInit()
    - Import RxJS library
    - Enhance the UserService with Observable (from synchronous to asynchronous service)
    - Show RxJS API
    - Subscribe to Observable in the UserComponent

08. Routing
    - Create HomeComponent (ng generate component Home)
    - Add AppRoutingModule (ng generate module app-routing --flat)
    - Use RouterModule.forRoot()
    - Export RouterModule from created AppRoutingModule
    - Add RouterOutlet
    - Import created AppRoutingModule in AppModule
    - Add the UserComponent route
    - Add the UserDetailComponent route
    - Add the HomeComponent route
    - Add a default route
    - Create NavbarComponent for navigation links (ng generate component Navbar)
    - Install dependency package ngx-bootstrap (npm install --save ngx-bootstrap)
    - Import CollapseModule and BsDropdownModule modules in AppModule from ngx-bootstrap
    - Navigate to the UserComponent
    - Import primeng UI modules in AppModule
    - Update the UserComponent view with primeng UI components (Table, Breadcrumb...)
    - Import Missing BrowserAnimationsModule in AppModule
    - Navigate to the UserDetailComponent
    - Update the UserDetailComponent
    - Extract user ID from ActivatedRoute Parameters
    - Update the UserService to get specific user by ID

09. User CRUD Forms
    - Update the User class (add username, password properties) 
    - Create UserNewComponent and its route (ng generate component UserNew)
    - Create UserEditComponent and its route (ng generate component UserEdit)
    - Create UserDeleteComponent and import primeng DialogModule in AppModule (ng generate component UserDelete)
    - Update navigation links in users dataTable
    - Show Template-driven forms (example only)
    - Import ReactiveFormsModule
    - Build Reactive Forms
    - Show FormControl
    - Show FormGroup
    - Show FormBuilder
    - Show Validators and custom Validators

10. HttpClient in the UserService
    - Enable HTTP services (HttpClientModule)
    - Inject HttpClient into UserService
    - Update the UserService by replacing Mocks to HttpClient Calls
    - Show HttpClient API examples
    - GET user by ID
    - POST new user
    - PUT existing user
    - DELETE existing user
    - Install dependency package angular2-notification (npm install --save angular2-notifications)
    - Inject Angular2-notifications service in the user's CRUD Components

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