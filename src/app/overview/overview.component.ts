import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToniesService } from '../services/tonies.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  allTonies: Observable<any>;
  myTonies: Observable<any>;

  constructor(private _tonies: ToniesService) { }

  ngOnInit() {
    this.allTonies = this._tonies.getAllTonies();
    this.myTonies = this._tonies.getMyTonies();
  }

}
