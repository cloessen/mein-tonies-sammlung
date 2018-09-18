import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tonie } from '../../shared/interfaces/tonies';
import { ToniesService } from '../../services/tonies.service';

@Component({
  selector: 'app-my-tonies',
  templateUrl: './my-tonies.component.html',
  styleUrls: ['./my-tonies.component.scss']
})
export class MyToniesComponent implements OnInit {
  myTonies: Observable<any>;
  @Input() myList: boolean;

  constructor(private _tonies: ToniesService) { }

  ngOnInit() {
    this.myTonies = this._tonies.getMyTonies();

  }

}
