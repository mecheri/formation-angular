# Tuto Steps

00. Generating  an Angular project (ng new)

01. Initial configuration 
    - Add SASS folder from Step02
    - Update styles config in angular.json file
    - Install devDependency package bootstrap-sass (npm install --save-dev bootstrap-sass)
    - Install devDependency package font-awesome (npm install --save-dev font-awesome)
    - Install dependency package primeng (npm install --save primeng)
    - Serve the app in dev mode

02. User component
    - Update the AppComponent view
    - Generate UserComponent (ng generate component User)
    - Create User class
    - Dispaly the user object
    - Show One-way binding: interpolation (to-the-dom)
    - Show One-way binding: property (to-the-dom)
    - Apply some of Angular's standard pipes
    - Generate and apply custom pipe (ng generate pipe Exponential)

03. User component Lifecycle Hooks
    - Update and clean the UserComponent view
    - Implement OnChanges
    - Implement AfterViewInit, Renderer and ViewChild (html input focus)
    - Implement AfterViewChecked
    - Implement OnDestroy

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
    - Install dependency package primeng (npm install --save ngx-bootstrap)
    - Import CollapseModule and BsDropdownModule modules in AppModule from ngx-bootstrap
    - Navigate to the UserComponent
    - Import primeng UI modules in AppModule
    - Update the UserComponent view with primeng UI components (DataTable, breadcrumb...)
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