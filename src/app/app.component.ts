import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Forms';
  firstNameControl: FormControl;
  emailControl: FormControl;
  passControl: FormControl;
  lastNameControl: FormControl;
  passSubmit: FormControl;

  ngOnInit(): void {
    this.firstNameControl = new FormControl('Ivan');
    this.lastNameControl = new FormControl('Ivanov');
    this.emailControl = new FormControl('', [Validators.required]);
    this.passControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.passSubmit = new FormControl('', [Validators.required]);
  }

  submitRegistration(): void {
    if ((this.passControl.value === this.passSubmit.value) && (this.emailControl.value === true)) {
      (
        alert('Success registration')
      );
    }
    if (this.passControl.value.length < 6) {
      alert('Password length is less then 6');
    }
  }
}
