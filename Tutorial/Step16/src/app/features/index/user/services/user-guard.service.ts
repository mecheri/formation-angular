import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

// Components
import { UserNewComponent } from './../components/user-new/user-new.component';
import { UserEditComponent } from './../components/user-edit/user-edit.component';

@Injectable({
    providedIn: 'root'
})
export class UserGuardService implements CanDeactivate<UserNewComponent | UserEditComponent> {

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