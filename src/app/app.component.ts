import { SecurityService } from './shared/security.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reminder 5';

  // todo: ViewChild need more practice and review here.
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  // todo: any data type no good.
  loggedIn$: Observable<any> = of();

  constructor(private observer: BreakpointObserver, private security: SecurityService) {}

  logout() {
    this.security.logout();
    // todo: after logout - redirect to the route or "/"

  }

  ngOnInit(): void {
    this.loggedIn$ = this.security.loggedIn();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    // todo: review the observer and how it works and its properties and how sidenav is working here.
    this.observer.observe(['(max-width:800px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      } )

  }
}


  // todo: only for chrome when the f12 network tab is open, the routing does not seem to work.
  // tried for over an hour.. chrome does not support this.

  // todo: navigation its own component instead of app component?

  // todo: add login screen via firebase and google login.
  // todo: manage logout button with login and rest of buttons based on login screen.
  // todo: manage other buttons based on login

  // todo: add jwt login

  // tood: add hard coded reminders with material table.
  // todo: add material table for contacts
  // todo: add httpinterceptor for jwt login
  // todo: add auth guard for reminders and contacts screen

