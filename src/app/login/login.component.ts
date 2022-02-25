import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from '../shared/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // todo: add validators for userId (email) and password
  // todo: add custom validator
  loginForm = this.fb.group({
    userId: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private security: SecurityService, private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  // todo: add jwt login tokenbased
  // todo: reactive form driven by json file.

  login() {
    this.security.login();
    // alert( JSON.stringify(this.loginForm.value))
  }

  loginDisabled(): boolean {
    return !this.loginForm.valid;
  }

}
