# Tuto Steps 

01. Generating  an Angular project (ng new)
    - Custom config
    - Serve the app in dev mode

02. User Component
    - Generate User component
    - Show component Lifecycle Hooks
    - Create User class
    - Show User template
    - Display User object
    - Show One-way binding: interpolation (to-the-dom)
    - Show One-way binding: property (to-the-dom)
    - Apply Angular pipes
    - Generate and apply custom pipes 

03. User editor
    - Show Two-way binding
    - FormsModule
    - AppModule
    - Import FormsModule
    - Declare the User component
    
04. Display a List of users
    - Mock users
    - Display users with *ngFor (structural directive)
    - Show One-way binding: event binding (from-the-dom)
    - Display user detail
    - Handle empty user detail with *ngIf (structural directive)
    - Generate and Apply attributes directives
    
05. User detail component (child component)
    - Generate the user detail component
    - Add @Input property 
    - Display the user detail component
    - Show the different types of components interaction

06. User service
    - Generate User service
    - Get user data
    - Provide the user servive
    - Inject the user service
    - Call it in ngOnInit()
    - Enhance user service with Observable (from synchronous to asynchronous service)
    - Show RxJS
    - Subscribe to Observable in the user component

07. Routing
    - Add AppRoutingModule
    - Add routes
    - Import RouterModule.forRoot()
    - Add RouterOutlet
    - Add route to user component
    - Update user component table (add primeng DataTable library)
    - Add route to user detail component
    - Extract user ID from Route Parameters
    - Update user service to get specific user by his ID
    - Create Home component
    - Add route to home component
    - Create Navbar component for navigation links

08. User CRUD Forms
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

09. HttpClient in user service
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
    
10. Core Module
    - Add factories
    - Add handlers
    - Add services
    - Add interceptors
    - Update AppModule
    - Add global application resources (res folder)

11. Shared Module
    - Import and export CommonModule, ReactiveFormsModule 
    - Add components (move Navbar component here)
    - Add services
    - Update CoreModule

12. Home and User components in separated modules as FeatureModules
    - Add UserModule
    - Add UserRoutingModule
    - Add HomeModule
    - Add HomeRoutingModule
    - Update AppRoutingModule
    - Add LazyLoading to both modules

13. Login And Register Modules
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

14. IndexModule as Portal
    - Add IndexModule
    - Add IndexRoutingModule
    - Add LazyLoading
    - Add second RouterOutlet
    - Update AppRoutingModule
    

