# STEP08

### TODO
- Create HomeComponent 
    ```bash
    ng generate component Home
    ```
- Add AppRoutingModule 
    ```bash
    ng generate module app-routing --flat
    ```
- Use RouterModule.forRoot()
- Export RouterModule from created AppRoutingModule
- Add RouterOutlet
- Import created AppRoutingModule in AppModule
- Add route to UserComponent
- Add route to UserDetailComponent
- Add route to HomeComponent
- Add a default route
- Create NavbarComponent for navigation links 
    ```bash
    ng generate component Navbar
    ```
- Install dependency package primeng
    ```bash
    npm install --save ngx-bootstrap
    ```
- Import ngx-bootstrap CollapseModule and BsDropdownModule modules in AppModule
- Navigate to UserComponent
- Import primeng UI modules in AppModule
- Update UserComponent view (use primeng DataTable, breadcrumb library)
- Import Missing BrowserAnimationsModule in AppModule
- Navigate to UserDetailComponent
- Update to UserDetailComponent
- Extract user ID from ActivatedRoute Parameters
- Update user service to get specific user by his ID

### DONE
- Step07