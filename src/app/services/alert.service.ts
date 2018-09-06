import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
export interface Alert {
  isActive: boolean;
  message: string;
  messageType: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alert: BehaviorSubject<Alert> = new BehaviorSubject<Alert>({isActive: false, message: null, messageType: null});
  constructor() { }
  public openAlert(message: string, messageType: string, duration = 3000) {
    this.alert.next({
      isActive: true,
      message: message,
      messageType: messageType
    });
    setTimeout(this.closeAlert.bind(this), duration);
  }
  public closeAlert() {
    this.alert.next({
      isActive: false,
      message: null,
      messageType: null
    });
  }
}
