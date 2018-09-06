import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alert, AlertService } from '../../services/alert.service';
import { BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  public alert$: BehaviorSubject<Alert>;
  public alert: Alert;

  constructor(public _alert: AlertService) {
  }

  onClose() {
    this._alert.closeAlert();
  }

  ngOnInit() {
    this.alert$ = this._alert.alert;
    this.alert$.subscribe((alert: Alert) => this.alert = alert);
  }
  ngOnDestroy() {
    this.alert$.unsubscribe();
  }

}
