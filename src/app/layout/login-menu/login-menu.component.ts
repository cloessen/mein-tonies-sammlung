import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, getIsLoading } from '../../app.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  public loginForm: FormGroup;
  public isLoading$: Observable<boolean>;

  constructor(
    private _auth: AuthService,
    private activeModal: NgbActiveModal,
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    this.isLoading$ = this._store.select(getIsLoading);
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  // HANDLE DIFFERENT LOGINS
  public handleEmailLogin() {
    this._auth.loginWithEmailPassword(this.email.value, this.password.value, this.activeModal);
  }
  public handleGoogleLogin() {
    this._auth.loginWithGoogle(this.activeModal);
  }
  public handleFacebookLogin() {
    this._auth.loginWithFacebook(this.activeModal);

  }

  // GETTERS
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
