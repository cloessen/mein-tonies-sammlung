import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToniesService } from '../../services/tonies.service';

@Component({
  selector: 'app-all-tonies',
  templateUrl: './all-tonies.component.html',
  styleUrls: ['./all-tonies.component.scss']
})
export class AllToniesComponent implements OnInit {

  allTonies: Observable<any>;
  @Input() myList: boolean;
  constructor(private _tonies: ToniesService) { }

  ngOnInit() {
    this.allTonies = this._tonies.getAllTonies();

  }

}
