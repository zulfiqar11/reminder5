import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private afAuth:AngularFireAuth) { }

  login() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  logout() {
    this.afAuth.signOut();
    // this.afAuth.authState.subscribe(data => console.log(data?.))
  }

  loggedIn() : Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  currentUser(): Promise<firebase.User | null> {
    return this.afAuth.currentUser;
  }

}
