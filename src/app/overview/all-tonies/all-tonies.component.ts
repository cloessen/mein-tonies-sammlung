import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToniesService } from '../../services/tonies.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-all-tonies',
  templateUrl: './all-tonies.component.html',
  styleUrls: ['./all-tonies.component.scss']
})
export class AllToniesComponent implements OnInit {

  allTonies: Observable<any>;
  names = [];
  @Input() myList: boolean;
  constructor(private _tonies: ToniesService) { }

  ngOnInit() {
    this.allTonies = this._tonies.getAllTonies();
    this.allTonies.subscribe(tonies => {
      this.names = tonies.map(tonie => tonie.name)
    });
  }
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.names.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
