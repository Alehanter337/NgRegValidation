import {Component, OnInit} from '@angular/core';
import {AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Forms';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }


  private static matchPassword(abstractControl: AbstractControl): ValidatorFn {
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
    }, {validator: AppComponent.matchPassword});
  }


  submitRegistration(): void {
    if (this.form.valid) {
      alert('Registration success');
    } else {
      Object.keys(this.form.controls).forEach((control: string): void => {
        this.form.controls[control].markAsTouched();
        this.form.controls[control].updateValueAndValidity();
      });
    }
  }
}
