import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// todo: move these to shared file.
export interface JsonFormControl {
  name: string
  label: string
  type: string
  value: string
  validators: ValidatorsInterface
}

export interface ValidatorsInterface {
  required: boolean
  minLength: number
}

export interface JsonFormData {
  controls: JsonFormControl[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {

  formData: JsonFormData = {controls: []};

  // todo: review this code initialization.
  registrationForm: FormGroup = this.fb.group({});

  // todo: code: move this httpClient into a shared service wrapper.
  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.http.get<JsonFormData>('/assets/register-form.json')
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
    // alert('register the user');
    console.log('Form valid: ', this.registrationForm.valid);
    console.log('Form values: ', this.registrationForm.value);
  }


}





  // formData: JsonFormData = {controls: []};
  // registerForm: FormGroup = this.fb.group({});








      // for(const control of controls) {
    //   const validatorsToAdd = [];
    //   for (const[key,value] of Object.entries(control.validators)) {
    //     switch(key) {
    //       case 'required':
    //         if(value) {
    //           validatorsToAdd.push(Validators.required);
    //         }
    //         break;
    //       case 'minLength':
    //         if(value) {
    //           validatorsToAdd.push(Validators.minLength(value));
    //         }
    //         break;
    //       default:
    //         break;
    //     }
    //   }

      // todo: code - read and review this again.
      // this.registerForm.addControl(
      //   control.name,
      //   new FormControl('')

      // );
    // }


      // ngOnInit(): void {
  //     this.http.get<JsonFormData>('/assets/register-form.json')
  //             .subscribe((formData: JsonFormData) => {
  //               this.formData = formData;
  //               console.log(this.formData);
  //               this.createForm(this.formData.controls);
  //             });


  // createForm(controls: JsonFormControl[]) {

  //   controls.forEach((element: any) => {
  //     this.registerForm.addControl(element.name, this.fb.control(''));
  //     console.log(element);
  //   })
