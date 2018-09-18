import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Tonie } from '../shared/interfaces/tonies';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ToniesService implements OnInit {

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
    // this.uid = localStorage.getItem('uid');
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
    // const id = this._db.createId();
    const checkRef = this.myToniesCol.doc(this._auth.getUid()).collection('myTonies').doc(tonie.name);
    console.log(checkRef);
    checkRef.snapshotChanges().subscribe(snap => {
      if (snap.payload.exists) {
        console.log('exists');
        return;
      } else {
        checkRef.set(tonie).then(res => console.log(res));
      }
    } );
    // this.myToniesCol.doc(this._auth.getUid())
    //   .collection('myTonies')
    //   .doc(tonie.name)
    //   .set(tonie)
    //   .then(console.log);
    // this.myToniesCol.doc(this._auth.getUid()).collection('myTonies').add({...tonie, id}).then(resp => console.log(resp));
  }
  public removeTonie(tonie: Tonie) {
    console.log(tonie);
    // get tonie ref by id
    this.myToniesCol.doc(this._auth.getUid())
      .collection('myTonies')
      .doc(tonie.name)
      .delete()
      .then(res => console.log(res));
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
