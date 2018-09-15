import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Tonie } from '../shared/tonies';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToniesService implements OnInit{

  // allTonies: Tonie[];
  // myTonies: Tonie[];
  allToniesCol: AngularFirestoreCollection;
  myToniesCol: AngularFirestoreCollection;
  uid: string;

  constructor(
    private _db: AngularFirestore,
    private _auth: AuthService
  ) {
    // this.uid = this._auth.getUid();
    console.log('TONIESSERVICE Constructor');
    this.allToniesCol = this._db.collection('tonies');
    this.myToniesCol = this._db.collection('users');
    this.uid = localStorage.getItem('uid');
  }

  ngOnInit() {
  }

  public getAllTonies() {
    return this.allToniesCol.valueChanges();
  }
  public getMyTonies() {
      return this.myToniesCol.doc(this.uid).collection('myTonies').valueChanges();
  }

  public toggleOwned(tonie) {
    // const currentTonie = this.toniesData.indexOf(tonie);
    // this.toniesData[currentTonie].owned = !this.toniesData[currentTonie].owned;
  }
  public toggleWish(tonie) {
    // const currentTonie = this.toniesData.indexOf(tonie);
    // this.toniesData[currentTonie].wish = !this.toniesData[currentTonie].wish;
  }
}
