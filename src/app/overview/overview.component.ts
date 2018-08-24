import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToniesService } from '../shared/tonies.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  allTonies: Observable<any>;

  constructor(private _tonies: ToniesService) { }

  ngOnInit() {
    this.allTonies = this._tonies.getAllTonies();
  }

}
