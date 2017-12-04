import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
  
  constructor() {}

  // L'objet ActivatedRouteSnapshot contient la future route qui sera activée 
  // L'objet RouterStateSnapshot contient le futur RouterState de l'application
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}