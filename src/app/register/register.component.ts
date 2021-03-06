import { Observable, of, PartialObserver, Subscribable, Unsubscribable } from 'rxjs';
import { RegisterService } from './../shared/service/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, HostListener, NgModule, OnInit, Injectable } from '@angular/core';
import { JsonFormControl, JsonFormData } from '../shared/model/registerform.model';



class CustomSubscribable implements Subscribable<any> {
  subscribe({next}: any) {
      next("hi from custom subscribable");
      return {
        unsubscribe: () => console.log("unsubscribed")
      };
    };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {

  formData: JsonFormData = {controls: []};
  stream$: Observable<string> = of('hello world. how is it going.');
  stream1!: Promise<any>;
  stream2!: any;

  // todo: code - zone.js add code
  // todo: code - add ChangeDetectorRef , markForCheck.
  // todo: code - add onPush change detection.
  // todo: code - check if any where in template a function is being called and replace that with a custom pipe.
  // todo: code - write a custom pipe.
  // todo: code - add FormArray in this reactive form
  // todo: code - add ControlValueAccessor

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


    this.stream1 = new Promise((resolve, reject) => {resolve("hello world promise")});
    this.stream2 = new CustomSubscribable();

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
