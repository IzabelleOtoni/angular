import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  
  public userState: Observable<firebase.User>;
  sendSignInLinkToEmail: any;

  constructor(public afAuth: AngularFireAuth) {
    this.userState = this.afAuth.authState;
  }

  doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return this.afAuth.auth.signInWithPopup(provider);
  }

  doRegister(value) {
    return this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password);
  }

  doLogin(value) {
    return this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password);
  }

  doLogout() {
    return this.afAuth.auth.signOut();
  }

  trySendEmail(value, firebase){
    return this.afAuth.auth.sendSignInLinkToEmail(value.email, firebase.ActionCodeSettings);
  }
}
