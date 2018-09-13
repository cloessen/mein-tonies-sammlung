import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout-success',
  templateUrl: './logout-success.component.html',
  styleUrls: ['./logout-success.component.scss']
})
export class LogoutSuccessComponent implements OnInit {


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    setTimeout(this.activeModal.close, 1500);
  }
  onCloseClick() {
    this.activeModal.close();
  }

}
