# Tuto Steps

00. Generating  an Angular project (ng new)

01. Initial configuration 
    - Add application SASS files (with scss extension) from Step02
    - Update styles config in angular.json file
    - Install devDependency package bootstrap-sass (npm install --save-dev bootstrap-sass)
    - Install devDependency package font-awesome (npm install --save-dev font-awesome)
    - Install dependency package primeng (npm install --save primeng)
    - Serve the app in dev mode

02. User component
    - Update the AppComponent view
    - Generate UserComponent (ng generate component User)
    - Create User class
    - Show the user object
    - Show One-way binding: interpolation (to-the-dom)
    - Show One-way binding: property (to-the-dom)
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
    - Update and clean UserComponent and his view
    - Mock users
    - Display users with *ngFor (structural directive)
    - Show One-way binding: event binding (from-the-dom)
    - Display user detail
    - Handle empty user detail with *ngIf (structural directive)
    - Generate and apply attributes directives (ng generate directive)

06. User detail component (child component)
    - Generate the userDetailComponent (ng generate component User/UserDetail)
    - Update and clean UserComponent and his view
    - Add @Input property
    - Display the user detail component
    - Show the different types of components interaction

07. User service
    - Clean Workspace (remove Pipes, Directives, Interaction07Service and update User and UserDetail Components AppModule)
    - Generate User service (ng g service User)
    - Add getUsers function
    - Provide the user servive
    - Inject the user service
    - Call it in ngOnInit()
    - Import RxJS library
    - Enhance user service with Observable (from synchronous to asynchronous service)
    - Show RxJS
    - Subscribe to Observable in the user component

08. Routing
    - Create HomeComponent (ng generate component Home)
    - Add AppRoutingModule (ng generate module app-routing --flat)
    - Use RouterModule.forRoot()
    - Export RouterModule from created AppRoutingModule
    - Add RouterOutlet
    - Import created AppRoutingModule in AppModule
    - Add route to UserComponent
    - Add route to UserDetailComponent
    - Add route to HomeComponent
    - Add a default route
    - Create NavbarComponent for navigation links (ng generate component Navbar)
    - Install dependency package primeng (npm install --save ngx-bootstrap)
    - Import ngx-bootstrap CollapseModule and BsDropdownModule modules in AppModule
    - Navigate to UserComponent
    - Import primeng UI modules in AppModule
    - Update UserComponent view (use primeng DataTable, breadcrumb library)
    - Import Missing BrowserAnimationsModule in AppModule
    - Navigate to UserDetailComponent
    - Update to UserDetailComponent
    - Extract user ID from ActivatedRoute Parameters
    - Update user service to get specific user by his ID

09. User CRUD Forms
    - Update User class (add username, password properties) 
    - Create UserNewComponent and his route (ng generate component UserNew)
    - Create UserEditComponent and his route (ng generate component UserEdit)
    - Create UserDeleteComponent and import primeng DialogModule in AppModule (ng generate component UserDelete)
    - Update navigation links in users dataTable
    - Show Template-driven forms (example only)
    - Import ReactiveFormsModule
    - Build Reactive Forms
    - Show FormControl
    - Show FormGroup
    - Show FormBuilder
    - Show Validators and custom Validators

10. HttpClient in user service
    - Enable HTTP services (HttpClientModule)
    - Inject HttpClient into UserService
    - Update UserService by replacing Mocks to HttpClient Calls
    - Show HttpClient API examples
    - GET user by ID
    - POST new user
    - PUT existing user
    - DELETE existing user
    - Install dependency package angular2-notification (npm install --save angular2-notifications)
    - Inject Angular2-notifications service in User CRUD Components

11. CoreModule 
    - Create folder app/modules
    - Generate CoreModule (ng generate module modules/core) 
    - Add factories 
    - Add handlers
    - Add services
    - Add interceptors
    - Update AppModule
    - Add global application resources (res folder) and update .angular-cli.json

12. SharedModule
    - Generate SharedModule (ng generate module modules/shared)
    - Import and export CommonModule, ReactiveFormsModule
    - Add shared components (move Navbar component here and )
    - Update CoreModule
    - Update AppModule

13. Home and User components in separated modules as FeatureModules
    - Generate UserModule and UserRoutingModule (ng generate module modules/user --routing)
    - Generate HomeModule and HomeRoutingModule (ng generate module modules/home --routing)
    - Move user and home components into the generated modules
    - Update AppModule AppRoutingModule
    - Add LazyLoading to both modules

14. Login And Register Modules
    - Add LoginModule and LoginRoutingModule and LoginComponent  
    - Add RegisterModule and RegisterRoutingModule and RegisterComponent
    - Update AppRoutingModule
    - Add fallback route for not found route 
    - Add LazyLoading to both modules
    - Add JWT Security    
    - Add Interceptors
    - Update Navbar by adding logout action and current user
    - Add Authentication Guards (canActivate)
    - Add User CRUD Forms Guards (canDeactivate)

15. IndexModule as a portal (Second RouterOutlet)
    - Generate IndexModule and IndexRoutingModule (ng generate module modules/index --routing)
    - Update AppRoutingModule
    - Load lazily IndexModule in AppRoutingModule
    - Load lazily UserModule and HomeModule in IndexRoutingModule
    - Add second RouterOutlet in IndexComponent view
    - Move Navbar tag from AppComponent to IndexComponent view
    - Update AppComponent view (let only the RouterOutlet tag)