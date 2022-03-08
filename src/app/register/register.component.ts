import { RegisterService } from './../shared/service/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { JsonFormControl, JsonFormData } from '../shared/model/registerform.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {

  formData: JsonFormData = {controls: []};

  // todo: code - add attribute directive to this specific module.
  // todo: code - add attribute directive to the whole application and share across the application.
  // todo: code - check if any where in template a function is being called and replace that with a custom pipe.
  // todo: code - write a custom pipe.

  // todo: review this code initialization.
  registrationForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder,
    private registerServie: RegisterService
    ) {}

  // todo: remove later..
  myhandler() {
    alert('Test alert - I am getting handled in register');
  }

  ngOnInit(): void {

    this.registerServie.getRegisterFormData()
      .subscribe((data: JsonFormData) => {
        this.formData = data;
        console.log('here is dynamic form array', this.formData.controls);
        this.createFormControl();
    });
  }

  createFormControl() {
    this.formData.controls.forEach((control: JsonFormControl) => {

      const validatorsToAdd = [];
      // todo: review this for loop.
      for (const[key,value] of Object.entries(control.validators)) {
        switch(key) {
          case 'required':
            if(value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'minLength':
            if(value) {
              let val = <number>value;
              validatorsToAdd.push(Validators.minLength(val));
            }
            break;
          default:
            break;
        }
      }

      // todo: review this code.
      this.registrationForm.addControl(
        control.name,
        this.fb.control(control.value, validatorsToAdd)
      );
    })
    console.log('registration form', this.registrationForm);
  }

  register(): void {
    // todo: code - implement backend user registration
    console.log('Form valid: ', this.registrationForm.valid);
    console.log('Form values: ', this.registrationForm.value);
  }

  disableRegister(): boolean {
    return !this.registrationForm.valid;
  }
}
