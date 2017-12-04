import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { DemoEditComponent } from './demo-edit.component';

@Injectable()
export class SaveFormsGuard implements CanDeactivate<DemoEditComponent> {

  constructor() { }

  canDeactivate(target: DemoEditComponent) {
    if (!target.isFormSaved) {
      return window.confirm('Voulez-vous annuler la saisie ?');
    }
    return true;
  }
}