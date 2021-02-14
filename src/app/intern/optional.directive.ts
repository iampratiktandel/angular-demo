import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appOptional]'
})
export class OptionalDirective {

  constructor() { }

}

// export const optionalValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//   const projectOne = control.get('projectOne');
//   const projectTwo = control.get('projectTwo');

//   return projectOne.value == !null || projectTwo.value == !null ? { optionalValidate: true } : null;
// };
