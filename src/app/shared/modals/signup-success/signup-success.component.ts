import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-success',
  templateUrl: './signup-success.component.html',
  styleUrls: ['./signup-success.component.scss']
})
export class SignupSuccessComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    setTimeout(this.activeModal.close, 1500);
  }
  onCloseClick() {
    this.activeModal.close();
  }

}
