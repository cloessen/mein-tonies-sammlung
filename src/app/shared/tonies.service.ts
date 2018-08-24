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
      owned: false
    },
    {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '2 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false
    },  {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '3 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false
    },  {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '4 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false
    },  {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '5 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false
    },  {
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QB8h1Y0gL._SL1200_.jpg',
      itemLink: 'https://amzn.to/2LeRRmR',
      name: '6 Tonies® Hörfigur - 30 Lieblings-Kinderlieder - Geburtstagslieder',
      owned: false
    }
    ];

  constructor() { }

  public getAllTonies(){
    return of(this.toniesData);
  }
}
