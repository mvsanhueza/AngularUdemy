import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';
// import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  // public myForm: FormGroup = this.fb.group({
  //   name: ['', [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
  //   email: ['', [Validators.required, Validators.pattern(customValidators.emailPattern)]],
  //   username: ['', [Validators.required, customValidators.cantBeStrider]],
  //   password: ['',[Validators.required, Validators.minLength(6)]],
  //   password2: ['',[Validators.required, Validators.minLength(6)]]
  // });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    //email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [new EmailValidator()]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]]
  }, {
    validators: [
      this.validatorService.isFieldOneEqualFieldTwo('password','password2'),
    ]
  });


  constructor(
    private fb: FormBuilder,
    private emailValidator: EmailValidator,
    private validatorService: ValidatorsService,
  ) { }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
