import { SecurityService } from './shared/security.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import firebase from 'firebase/compat/app';

import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reminder 5';

  // todo: ViewChild need more practice and review here.
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  loggedIn$: Observable<firebase.User | null> = of();

  // todo: super tired: watch live coding by Ahsan..
  constructor(private observer: BreakpointObserver,
              private security: SecurityService,
              private router: Router) {}

  logout() {
    this.security.logout();
    this.router.navigate(['/']);
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

  // todo: move out navigation from app component to its component.

  // todo: add hard coded reminders with material table.
  // todo: add material table for contacts
  // todo: add httpinterceptor for jwt login



