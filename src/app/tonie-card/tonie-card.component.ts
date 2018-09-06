import { Component, Input, OnInit } from '@angular/core';
import { ToniesService } from '../services/tonies.service';

@Component({
  selector: 'app-tonie-card',
  templateUrl: './tonie-card.component.html',
  styleUrls: ['./tonie-card.component.scss']
})
export class TonieCardComponent implements OnInit {
  @Input() tonie: any;

  constructor(private _tonies: ToniesService) { }

  ngOnInit() {
  }
  onOwnedClick(tonie) {
    this._tonies.toggleOwned(tonie);
  }
  onNotOwnedClick(tonie) {
    this._tonies.toggleOwned(tonie);
  }
  onWishClick(tonie) {
    this._tonies.toggleWish(tonie);
  }

}
