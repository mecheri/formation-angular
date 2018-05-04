import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, NG_VALIDATORS, Validator } from '@angular/forms';

export function forbiddenLabelValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenLabel': { value: control.value } } : null;
    };
}

@Directive({
    selector: '[forbiddenLabel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective implements Validator {
    @Input() forbiddenLabel: string;

    validate(control: AbstractControl): { [key: string]: any } {
        return this.forbiddenLabel ? forbiddenLabelValidator(new RegExp(this.forbiddenLabel, 'i'))(control)
            : null;
    }
}