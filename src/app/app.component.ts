import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reminder 5';

  // todo: ViewChild need more practice and review here.
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, public afAuth: AngularFireAuth) {}

  // todo: move auth functionality into a separate component.
  // todo: move login to a separate component.
  // todo: add jwt login tokenbased
  // todo: add reactive form login form for jwt token based
  login() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  logout() {

    this.afAuth.signOut();
    // todo: after logout - redirect to the route or "/"
    // todo: why afAuth.authState is an observable.
    // this.afAuth.authState.subscribe(data => console.log(data?.))
  }

  ngOnInit(): void {

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

