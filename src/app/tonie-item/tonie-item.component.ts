import { Component, Input, OnInit } from '@angular/core';
import { ToniesService } from '../services/tonies.service';

@Component({
  selector: 'app-tonie-item',
  templateUrl: './tonie-item.component.html',
  styleUrls: ['./tonie-item.component.scss']
})
export class TonieItemComponent implements OnInit {

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
