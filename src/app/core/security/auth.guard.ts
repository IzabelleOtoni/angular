import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.userState.pipe(
      map((user: firebase.User) => {
        if (user === null) {
          this.router.navigate(['login']);
          return false;
        }

        return true;
      })
    );
  }
}
