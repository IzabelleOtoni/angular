import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NonAuthGuard implements CanActivate {
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.userState.pipe(
      map((user: firebase.User) => {
        if (user !== null) {
          this.router.navigate(['search']);
          return false;
        }

        return true;
      })
    );
  }
}
