import {Component, OnInit} from '@angular/core';
import {AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  title = 'Forms';
  form: FormGroup;

  private static matchPasswords(abstractControl: AbstractControl): ValidatorFn {
    const password: string = abstractControl.get('password').value;
    const confirmPassword: string = abstractControl.get('confirmPassword').value;
    if (password && confirmPassword && password !== confirmPassword) {
      abstractControl.get('confirmPassword').setErrors({matchPassword: true});
    } else {
      return null;
    }
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),
        Validators.pattern('[a-zA-Z0-9]+')]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: AppComponent.matchPasswords});
  }


  submitRegistration(): void {
    if (this.form.controls.password.value === this.form.controls.confirmPassword.value) {
      alert('Registration success');
    }
    else { alert('Password is not matching'); }
  }


}
