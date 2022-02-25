import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SecurityService } from '../shared/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userId: [''],
    password: ['']
  })

  constructor(private security: SecurityService, private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  // todo: add jwt login tokenbased
  // todo: add reactive form login
  // todo: reactive form driven by json file.

  login() {
    this.security.login();
  }

}
