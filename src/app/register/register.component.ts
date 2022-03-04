import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// todo: move these to shared file.
export interface JsonFormControl {
  name: string
  label: string
  value: string
  type: string
  validators: ValidatorsInterface
}

export interface ValidatorsInterface {
  required: boolean
  minLength: number
}

export interface JsonFormData {
  controls: JsonFormControl[];
}

// todo: study ChangeDetectionStrategy.OnPush
  // changeDetection: ChangeDetectionStrategy.OnPush

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  dynamicFormArray: any;
  registrationForm: FormGroup = this.fb.group({});

  // todo: code: move this httpClient into a shared service wrapper.
  constructor(private http: HttpClient, private fb: FormBuilder) {
    // this.registrationForm = this.fb.group({});
  }


  ngOnInit(): void {

    this.http.get('/assets/register-form.json')
    .subscribe(data => {
      this.dynamicFormArray = data;
      console.log('here is dynamic form array', this.dynamicFormArray);
      this.createFormControl();
    });
  }

  createFormControl() {
    this.dynamicFormArray.forEach((element: any) => {
      this.registrationForm.addControl(element.name , this.fb.control(''));
    })
    console.log('registration form', this.registrationForm);
  }

  register(): void {
    // alert('register the user');
    console.log('Form valid: ', this.registrationForm.valid);
    console.log('Form values: ', this.registrationForm.value);
  }


}

// todo: delete these comments when all done.

  // this.fb.control(control.value, validatorsToAdd)


    // todo: study @Input again.
  // @Input() jsonFormData: JsonFormData;
  // todo: night time: add reactive form for user registration.
  // todo: night time: reactive form driven by json file.



  // formData: JsonFormData = {controls: []};
  // registerForm: FormGroup = this.fb.group({});

    // this.dynamicFormArray = [
    //   {"ID": "FirstName", "Label": "First Namedddd"},
    //   {"ID": "LastName", "Label": "Last Name"}
    // ]

    // this.createFormControl();

  // // = [
  // //   {"ID": "FirstName1", "Label": "First Name1"},
  // //   {"ID": "LastName1", "Label": "Last Name1"}
  // // ]


// this.registrationForm = this.fb.group({});






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
