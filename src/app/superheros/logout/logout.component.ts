import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.doLogout().then(() => {
      this.router.navigate(['home']);
    });
  }
}
