# STEP15

### TODO
- Generate IndexModule and IndexRoutingModule 
    ```bash
    ng generate module modules/index --routing
    ```
- Update AppRoutingModule
- Load lazily IndexModule in AppRoutingModule
- Load lazily UserModule and HomeModule in IndexRoutingModule
- Add second RouterOutlet in IndexComponent view
- Move Navbar tag from AppComponent to IndexComponent view
- Update AppComponent view (let only the RouterOutlet tag)

### DONE
- Step14