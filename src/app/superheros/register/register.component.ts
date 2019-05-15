import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/security/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';

  ngOnInit(): void {}

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  tryRegister(value) {
    this.registerForm.updateValueAndValidity({ emitEvent: false });

    if (this.registerForm.valid) {
      this.authService.doRegister(value).then(
        res => {
          console.log(res);
          this.errorMessage = '';
          this.router.navigate(['search']);
        },
        err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = '';
        }
      );
    }
  }
}
