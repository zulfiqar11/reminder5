import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../shared/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private security: SecurityService) { }

  ngOnInit(): void {
  }

  // todo: add jwt login tokenbased
  // todo: add reactive form login form for jwt token based
  login() {
    this.security.login();
  }

}
