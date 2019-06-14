import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/security/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth"; 
import * as firebase from "firebase";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  errorMessage: string = '';


  resetForm = new FormGroup({
    email: new FormControl(''),
  });

  // allison.julio@hotmail.com
  // belle.amaral@hotmail.com

  constructor(
    public authService: AuthService, 
    private router: Router, 
    private fb: FormBuilder, 
    private authFire : AngularFireAuth,
     ) { }

  public ngOnInit() {
  }


  public createForm() {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  public resetpssword (email){ 
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email.email)
      .then((result) => {
        alert(`The link was successfully sent to ${email.email}`)
        this.router.navigate(['/login'])

      })
      .catch((error) => console.log(error))
    // console.log(value);

  }
}
