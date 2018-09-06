import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AlertService } from './alert.service';
import { LoginComponent } from '../shared/modals/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _afAuth: AngularFireAuth, private _alert: AlertService, private _modalService: NgbModal) {

  }
  public loginWithEmailPassword(email, password) {
    return this._afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  public  loginWithGoogle() {
    this._afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(response => {
      console.log(response);
      // TODO: Build a Success component and a Error Component!!!!111elf
      this._modalService.open(LoginComponent, {windowClass: 'success-modal', backdrop: false, size: 'lg'});

      // this._alert.openAlert('Herzlich Willkommen', 'success');
    }).catch(e => {
      this._alert.openAlert(e.message, 'danger');
    });
  }
  public logout() {
    this._afAuth.auth.signOut().then( response => {
      console.log(response);
      this._alert.openAlert('Erfolgreich abgemeldet', 'success');
    });
  }
  public getAuthState() {
    return this._afAuth.authState;
  }
}
