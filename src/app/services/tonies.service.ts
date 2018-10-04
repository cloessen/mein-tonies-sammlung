import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Tonie } from '../shared/interfaces/tonies';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToniesService implements OnInit {

  allToniesCol: AngularFirestoreCollection;
  myToniesCol: AngularFirestoreCollection;

  constructor(
    private _db: AngularFirestore,
    private _auth: AuthService,
    private _toastr: ToastrService
  ) {
    console.log('TONIESSERVICE Constructor');
    this.allToniesCol = this._db.collection('tonies');
    this.myToniesCol = this._db.collection('users');
  }

  ngOnInit() {
  }

  public getAllTonies() {
    return this.allToniesCol.valueChanges();
  }
  public getMyTonies() {
    if (this._auth.getUid()) {
      return this.myToniesCol.doc(this._auth.getUid()).collection('myTonies').valueChanges();
    } else {
      return null;
    }
  }
  public addTonie(tonie: Tonie) {
    console.log(tonie);
    const tonieRef = this.myToniesCol.doc(this._auth.getUid()).collection('myTonies').doc(tonie.name);
    tonieRef.set(tonie)
      .then(res => this._toastr.success('zu deiner Sammlung hinzugefügt!', `${tonie.name}`))
      .catch(err => this._toastr.error(err.message));
  }
  public removeTonie(tonie: Tonie) {
    console.log(tonie);
    // get tonie ref by id
    this.myToniesCol.doc(this._auth.getUid())
      .collection('myTonies')
      .doc(tonie.name)
      .delete()
      .then(res => this._toastr.success(`aus deiner Sammlung erntfernt`, `${tonie.name}`));
    // this.myToniesCol.doc(this._auth.getUid())
    //   .collection('myTonies', ref => ref.where('id', '==', tonie.id)).get({})
    //   .subscribe(docs => {
    //     docs.forEach(doc => doc.ref.delete().then(resp => console.log(resp)));
    //   });
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
