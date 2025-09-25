import {AbstractControl, ValidatorFn} from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl)=>{
    if (!control.value) return null;

    const forbidden = !control.value.endsWith('@gmail.com');
    return forbidden ? {emailValidator: {value: control.value}} : null;
}
}
