import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss']
})
export class LoginSuccessComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    setTimeout(this.activeModal.close, 1500);
  }
  onCloseClick() {
    this.activeModal.close();
  }

}
