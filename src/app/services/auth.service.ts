import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AlertService } from './alert.service';
import { LoginSuccessComponent } from '../shared/modals/login-success/login-success.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutSuccessComponent } from '../shared/modals/logout-success/logout-success.component';
import { Router } from '@angular/router';
import { SignupSuccessComponent } from '../shared/modals/signup-success/signup-success.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uid: string;

  constructor(
    private _afAuth: AngularFireAuth,
    private _alert: AlertService,
    private _modalService: NgbModal,
    private router: Router) {
  }
  private loginSuccess(uid?) {
    this.uid = uid;
    this._modalService.open(LoginSuccessComponent, {windowClass: 'success-modal', backdrop: false});
    this.router.navigate(['/collection']);
  }
  private signupSuccess(uid?) {
    this.uid = uid;
    this._modalService.open(SignupSuccessComponent, {windowClass: 'success-modal', size: 'lg', backdrop: false});
    this.router.navigate(['/collection']);
  }


  public signupWithEmailPassword(email, password, activeModal: NgbActiveModal) {
    this._afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( (resp) => {
        console.log(resp);
        activeModal.close();
        this.signupSuccess();
      }).catch(err => console.log(err.message));
  }
  public loginWithEmailPassword(email, password, activeModal: NgbActiveModal) {
    this._afAuth.auth.signInWithEmailAndPassword(email, password).then(
      (resp) => {
        console.log(resp);
        activeModal.close();
        this.loginSuccess();
      }
    );
  }
  public loginWithGoogle(activeModal: NgbActiveModal) {
    this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {
      this.loginSuccess();
      activeModal.close();
    }).catch(e => {
      this._alert.openAlert(e.message, 'danger');
    });
  }
  public signupWithGoogle(activeModal: NgbActiveModal) {
    this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(response => {
      this.signupSuccess();
      activeModal.close();
    }).catch(e => {
      this._alert.openAlert(e.message, 'danger');
    });
  }
  public loginWithFacebook(activeModal: NgbActiveModal) {
    this._afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(response => {
      this.loginSuccess();
      activeModal.close();
    }).catch(e => {
      this._alert.openAlert(e.message, 'danger');
    });
  }
  public signupWithFacebook(activeModal: NgbActiveModal) {
    this._afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(response => {
      this.signupSuccess();
      activeModal.close();
    }).catch(e => {
      this._alert.openAlert(e.message, 'danger');
    });
  }
  public logout() {
    this._afAuth.auth.signOut().then( response => {
      localStorage.clear();
      this._modalService.open(LogoutSuccessComponent, {windowClass: 'success-modal', backdrop: false});
      this.router.navigate(['/']);
    });
  }
  public getAuthState() {
    return this._afAuth.authState;
  }
  public getUid() {
    return this._afAuth.auth.currentUser.uid;
  }
  public isLoggedIn() {
    return this._afAuth.auth.currentUser ? true : false
  }
}
