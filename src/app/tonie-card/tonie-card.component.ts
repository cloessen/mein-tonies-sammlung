import { Component, Input, OnInit } from '@angular/core';
import { ToniesService } from '../services/tonies.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Tonie } from '../shared/interfaces/tonies';

@Component({
  selector: 'app-tonie-card',
  templateUrl: './tonie-card.component.html',
  styleUrls: ['./tonie-card.component.scss'],
  animations: [
    trigger('cardState', [
      state('normal', style({
      })),
      state('hover', style({
        transform: 'scale(1.15)',
        'z-index': 1000
      })),
      transition('normal <=> hover', animate(150)),
      // transition('hover => normal', animate(250))
    ])
  ]
})
export class TonieCardComponent implements OnInit {
  @Input() tonie: any;
  @Input() myList: false;
  hoverState = 'normal';

  constructor(private _tonies: ToniesService) { }

  ngOnInit() {
  }
  handleHover(val) {
    this.hoverState = val;
  }
  handleAddTonie(tonie: Tonie) {
    this._tonies.addTonie(tonie);
  }
  handleRemoveTonie(tonie: Tonie) {
    this._tonies.removeTonie(tonie);
  }
  // onOwnedClick(tonie) {
  //   this._tonies.toggleOwned(tonie);
  // }
  // onNotOwnedClick(tonie) {
  //   this._tonies.toggleOwned(tonie);
  // }
  // onWishClick(tonie) {
  //   this._tonies.toggleWish(tonie);
  // }

}
