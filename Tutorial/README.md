# Tuto Steps

01. Generating  an Angular project (ng new)
    - Add custom SASS files
    - Update styles and styleExt in .angular-cli.json
    - Install devDependency package bootstrap-sass (npm install --save-dev bootstrap-sass)
    - Install devDependency package font-awesome (npm install --save-dev font-awesome)
    - Install dependency package primeng (npm install --save primeng)
    - Serve the app in dev mode
    - Show app bootsraping

02. User component
    - Update the AppComponent view
    - Generate UserComponent (ng generate component User)
    - Create User class
    - Show the user object
    - Talk about One-way binding: interpolation (to-the-dom)
    - Talk about One-way binding: property (to-the-dom)
    - Apply Angular standard pipes
    - Generate and apply custom pipes (ng generate pipe Exponential)

03. User component Lifecycle Hooks
    - Update and clean UserComponent view
    - Implement OnChanges
    - Implement AfterViewInit, Renderer and ViewChild (html input focus)
    - Implement AfterViewChecked
    - Implement OnDestroy

04. User editor
    - Update and clean UserComponent view
    - Add Some bootstrap classes (container-fluid, form-control)
    - Show Two-way binding
    - Missing FormsModule
    - Import FormsModule in AppModule

05. Display a List of users
    - Update and clean UserComponent and view
    - Mock users
    - Display users with *ngFor (structural directive)
    - Show One-way binding: event binding (from-the-dom)
    - Display user detail
    - Handle empty user detail with *ngIf (structural directive)
    - Generate and apply attributes directives (ng generate directive)

06. User detail component (child component)
    - Clean Workspace
    - Generate the userDetailComponent (ng generate component User/UserDetail)
    - Add @Input property
    - Display the user detail component
    - Show the different types of components interaction

07. User service
    - Clean Workspace
    - Generate User service
    - Get user data
    - Provide the user servive
    - Inject the user service
    - Call it in ngOnInit()
    - Enhance user service with Observable (from synchronous to asynchronous service)
    - Show RxJS
    - Subscribe to Observable in the user component

08. Routing
    - Clean Workspace
    - Add AppRoutingModule
    - Add routes
    - Import RouterModule.forRoot()
    - Add RouterOutlet
    - Add route to user component
    - Update user component table (use primeng DataTable library)
    - Add route to user detail component
    - Extract user ID from Route Parameters
    - Update user service to get specific user by his ID
    - Create Home component
    - Add route to home component
    - Add some styles
    - Add NavbarComponent for navigation links

09. User CRUD Forms
    - Create user new component and his route
    - Create user edit component and his route
    - Create user delete component
    - Update navigation links
    - Show Template-driven forms (example only)
    - Import ReactiveFormsModule
    - Build Reactive Forms
    - Show FormControl
    - Show FormGroup
    - Show FormBuilder
    - Show Validators and custom Validators

10. HttpClient in user service
    - Add HttpClientModule
    - Update user service by replacing Mocks to HttpClient Calls
    - Show HttpClient API samples
    - Show Error Handling
    - Inject custom service httpResponseService
    - GET user by ID
    - POST new user
    - PUT existing user
    - DELETE existing user
    - Update user CRUD forms (add angular2-notification library)

11. Core Module
    - Add factories
    - Add handlers
    - Add services
    - Add interceptors
    - Update AppModule
    - Add global application resources (res folder) and update .angular-cli.json

12. Shared Module
    - Import and export CommonModule, ReactiveFormsModule
    - Add components (move Navbar component here)
    - Add services
    - Update CoreModule

13. Home and User components in separated modules as FeatureModules
    - Add UserModule
    - Add UserRoutingModule
    - Add HomeModule
    - Add HomeRoutingModule
    - Update AppRoutingModule
    - Add LazyLoading to both modules

14. Login And Register Modules
    - Add LoginModule
    - Add LoginRoutingModule
    - Add LoginComponent
    - Add RegisterModule
    - Add RegisterRoutingModule
    - Add RegisterComponent
    - Update AppRoutingModule
    - Add LazyLoading to both modules
    - Add JWT Security
    - Add Interceptors
    - Add Authentication Guards
    - Add User Forms Guards

15. IndexModule as Portal
    - Add IndexModule
    - Add IndexRoutingModule
    - Add LazyLoading
    - Add second RouterOutlet
    - Update AppRoutingModule

16. Final State (Angular CLI Starter)