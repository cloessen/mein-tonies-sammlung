import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  public loginForm: FormGroup;
  public isLoading = false;

  constructor(
    private _auth: AuthService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  // HANDLE DIFFERENT LOGINS
  public handleEmailLogin() {
    this.isLoading = true;
    this._auth.loginWithEmailPassword(this.email.value, this.password.value, this.activeModal);
  }
  public handleGoogleLogin() {
    this.isLoading = true;
    this._auth.loginWithGoogle(this.activeModal);
    // this.activeModal.close();
  }
  public handleFacebookLogin() {
    this.isLoading = true;
    this._auth.loginWithFacebook(this.activeModal);
    // this.activeModal.close();
  }

  // GETTERS
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
