import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AlertService } from './alert.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { StartLoading, StopLoading } from '../shared/ui.actions';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AddToMyTonies, LoadedAllTonies, ToniesActionTypes } from '../shared/tonies.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uid: string;

  constructor(
    private _afAuth: AngularFireAuth,
    private _alert: AlertService,
    private _toastr: ToastrService,
    private _router: Router,
    private _store: Store<AppState>) {
  }
  private loginSuccess() {
    // JUST FOR TESTING
    this._store.dispatch(new LoadedAllTonies([
      {
        name: 'test tonie',
        imgUrl: 'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif',
        id: '123',
        itemLink: 'google.de',
        category: 'Tonies'
      }
      ]
    ));
    const title = 'Erfolgreich angemeldet!';
    const msg = 'Herzlich Willkommen!';
    this._toastr.success(msg , title);
    this._router.navigate(['/collection']);
  }
  private signupSuccess() {
    const title = 'Erfolgreich registriert!';
    const msg = 'Herzlich Willkommen!';
    this._toastr.success(msg , title);
    this._router.navigate(['/collection']);
  }
  private catchedError(e) {
    const errConfig = {
      timeOut: 3000
    }
    const errTitle = 'Ein Fehler ist aufgetreten!';
    this._store.dispatch(new StopLoading());
    if (e.code === 'auth/email-already-in-use') {
      const errMsg = 'Bitte überprüfe deine Anmeldedaten';
      this._toastr.error(errMsg , errTitle, errConfig);
    } else if (e.code === 'auth/wrong-password') {
      const errMsg = 'Passwort und/oder Emailadresse falsch';
      this._toastr.error(errMsg, errTitle, errConfig);
    } else {
      const errMsg = 'Bitte versuche es erneut';
      this._toastr.error(errMsg, errTitle, errConfig);
    }
  }


  // EMAIL & PASSWORD

  public signupWithEmailPassword(email, password, activeModal: NgbActiveModal) {
    this._store.dispatch(new StartLoading());
    this._afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( () => {
        this._store.dispatch(new StopLoading());
        activeModal.close();
        this.signupSuccess();
      }).catch(err => this.catchedError(err));
  }
  public loginWithEmailPassword(email, password, activeModal: NgbActiveModal) {
    this._store.dispatch(new StartLoading());
    this._afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this._store.dispatch(new StopLoading());
        activeModal.close();
        this.loginSuccess();
      }
    ).catch(err => this.catchedError(err));
  }


  // GOOGLE

  public loginWithGoogle(activeModal: NgbActiveModal) {
    this._store.dispatch(new StartLoading());
    this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        this.loginSuccess();
        activeModal.close();
    }).catch(err => this.catchedError(err));
  }
  public signupWithGoogle(activeModal: NgbActiveModal) {
    this._store.dispatch(new StartLoading());
    this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this._store.dispatch(new StopLoading());
        this.signupSuccess();
        activeModal.close();
    }).catch(err => this.catchedError(err));
  }


  // FACEBOOK


  public loginWithFacebook(activeModal: NgbActiveModal) {
    this._store.dispatch(new StartLoading());
    this._afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(() => {
        this._store.dispatch(new StopLoading());
        this.loginSuccess();
        activeModal.close();
    }).catch(err => this.catchedError(err));
  }
  public signupWithFacebook(activeModal: NgbActiveModal) {
    this._store.dispatch(new StartLoading());
    this._afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(() => {
        this._store.dispatch(new StopLoading());
        this.signupSuccess();
        activeModal.close();
    }).catch(err => this.catchedError(err));
  }


  // LOGOUT


  public logout() {
    this._store.dispatch(new StartLoading());
    this._afAuth.auth.signOut()
      .then( () => {
        this._store.dispatch(new StopLoading());
        const title = 'Erfolgreich abgemeldet';
        const msg = 'Aufwiedersehen, bis zum nächsten mal';
        this._toastr.success(msg , title);
        this._router.navigate(['/']);
    }).catch(err => this.catchedError(err));
  }
  public getAuthState() {
    return this._afAuth.authState;
  }
  public getUid() {
    return this._afAuth.auth.currentUser.uid;
  }
  public isLoggedIn() {
    return this._afAuth.auth.currentUser ? true : false;
  }
}
