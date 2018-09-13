import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// class PasswordValidation {
//   static matchPasswords(control: AbstractControl) {
//     console.log(control);
//     const password = SignupMenuComponent.signupForm.get('password').value;
//     const confirmPassword = control.get('confirmPassword').value;
//     return password === confirmPassword ? null : {'passwordsDontMatch': true};
//   }
// }

@Component({
  selector: 'app-signup-menu',
  templateUrl: './signup-menu.component.html',
  styleUrls: ['./signup-menu.component.scss']
})
export class SignupMenuComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(
    private _auth: AuthService,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(
        null,
        [Validators.required, Validators.email]),
      'password': new FormControl(
        null,
        [Validators.required]),
      'confirmPassword': new FormControl(
        null,
        [Validators.required])
    }, this.comparePassword.bind(this));
  }

  // COMPARE PASSWORDS VALIDATOR
  private comparePassword(form: FormControl): {[key: string]: boolean} {
    return form.value.password !== form.value.confirmPassword ? {'passwordsDontMatch': true} : null;
  }

  // HANDLE DIFFERENT SIGNUPS
  public handleEmailSignup() {
    this._auth.signupWithEmailPassword(this.email.value, this.password.value, this.activeModal);
  }
  public handleGoogleSignup() {
    this._auth.signupWithGoogle(this.activeModal);
  }
  public handleFacebookSignup() {
    this._auth.signupWithFacebook(this.activeModal);
  }

  // GETTERS
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
  get errors() {
    return this.signupForm.errors;
  }
}
