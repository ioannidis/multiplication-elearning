import { AbstractControl, ValidatorFn } from '@angular/forms';

export class MatchingFieldsValidator {

  static matchingFields(matchFrom: string, matchTo: string): ValidatorFn {

    return (formGroup: AbstractControl) => {
      if (formGroup) {
        if (formGroup.get(matchFrom).value !== formGroup.get(matchTo).value) {
          const key = 'invalidMatching' + matchFrom.charAt(0).toUpperCase() + matchFrom.slice(1);
          return {[key]: true};
        }
      }
    };

  }

}

