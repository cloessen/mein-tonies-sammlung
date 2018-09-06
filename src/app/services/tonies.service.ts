import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToniesService {

  private toniesData = [
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '1 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: true,
      wish: false
    },
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '2 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: true,
      wish: false
    },
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '3 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false,
      wish: false
    },
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '4 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false,
      wish: false
    },  {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '5 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false,
      wish: false
    },
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '6 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false,
      wish: false
    },
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '7 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: true,
      wish: false
    },
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '8 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: true,
      wish: false
    },
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '9 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false,
      wish: false
    },
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '10 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: true,
      wish: false
    },
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '11 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false,
      wish: false
    }
    ];

  constructor() { }

  public getAllTonies() {
    return of(this.toniesData);
  }
  public myTonies() {
    return of(this.toniesData.filter((tonie) => tonie.owned));
  }
  public toggleOwned(tonie) {
    const currentTonie = this.toniesData.indexOf(tonie);
    this.toniesData[currentTonie].owned = !this.toniesData[currentTonie].owned;
  }
  public toggleWish(tonie) {
    const currentTonie = this.toniesData.indexOf(tonie);
    this.toniesData[currentTonie].wish = !this.toniesData[currentTonie].wish;
  }
}
