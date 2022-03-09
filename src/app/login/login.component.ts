import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../shared/service/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // todo: add custom validator

  // todo: removed this for ease of use.
  // loginForm = this.fb.group({
  //   userId: ['', [Validators.required, Validators.email]],
  //   password: ['', Validators.required]
  // })

  // todo: remove this later when cypress is added.
  loginForm = this.fb.group({
    userId: [''],
    password: ['']
  })
  returnUrl: string = '';

  constructor(private security: SecurityService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.returnUrl = decodeURIComponent(this.returnUrl);
  }

  // todo: add jwt login tokenbased

  login() {
    this.security.login().then(() => this.router.navigateByUrl(this.returnUrl))

    // alert( JSON.stringify(this.loginForm.value))
  }

  loginDisabled(): boolean {
    return !this.loginForm.valid;
  }

  formValue(): Observable<any> {
    return this.loginForm.valueChanges;
  }
}
