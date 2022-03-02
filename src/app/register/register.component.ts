import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // todo: night time: add reactive form for user registration.
  // todo: night time: reactive form driven by json file.

  register(): void {
    alert('register the user');
  }

}
