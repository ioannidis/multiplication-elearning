import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { MatchingFieldsValidator } from '../../../core/validators/matching-fields.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() formType: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;
  public isSubmitted: boolean = false;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@gmail\.[a-z]{2,4}$')]],
      firstName: ['', [Validators.required]],
      lastName: [''],
      role: ['student', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: MatchingFieldsValidator.matchingFields('password', 'confirmPassword') });
  }

  ngOnInit() {
  }

  switchForm(formType) {
    this.formType.emit({formType})
  }

  onSubmit() {

    if (this.form.invalid) {
      return;
    }

    this.isSubmitted = true;

    this.authService.signUp(this.form.value)
      .subscribe(x => {
        this.formType.emit({formType: 1})
      },
        error => {
        this.isSubmitted = false;
        console.log('Error code :' +  error.status + ' - ' + error.error.message + ' / ' + error.message);

        if (error.error.hasOwnProperty('errors')) {
          error.error.errors.forEach(x => {
            this.mapHttpErrorToField(x);
          });
        } else {
          const validationErrors: ValidationErrors = {invalidField: 'A user with this email already exits.'};
          this.form.get('email').setErrors(validationErrors);
        }
      });

  }

  mapHttpErrorToField(error: any) {
    if (this.form.get(error.field)) {
      const validationErrors: ValidationErrors = {invalidField: error.message};
      this.form.get(error.field).setErrors(validationErrors);
      this.form.get(error.field).patchValue('');
    }
  }

}
