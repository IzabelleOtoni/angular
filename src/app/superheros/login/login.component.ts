import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/security/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  ngOnInit(): void {}

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin().then(res => {
      this.router.navigate(['/search']);
    });
  }

  tryLogin(value) {
    this.authService.doLogin(value).then(
      res => {
        this.router.navigate(['/search']);
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
      }
    );
  }
}
