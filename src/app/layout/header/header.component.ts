import { Component, HostListener, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../shared/modals/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;
  public scrollPos = 0;
  public authState$: Observable<any>;
  public currentModal: any;

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    this.scrollPos = window.pageYOffset;
  }
  constructor(
    private _alert: AlertService,
    private _auth: AuthService,
    private _modalService: NgbModal) { }

  ngOnInit() {
    this.authState$ = this._auth.getAuthState();
    // console.log(typeof this.authState$);
    this._auth.getAuthState().subscribe(state => state ? console.log( state) : null );
    // console.log(this._auth.getAuthState());
  }
  login() {
    this._auth.loginWithGoogle();
    if (!this.isCollapsed) { this.toggleCollapse();}
    // this._alert.openAlert('Willkommen, Du bist Erfolgreich angemeldet', 'success', 3000);
  }
  logout() {
    this._auth.logout();
    if (!this.isCollapsed) { this.toggleCollapse();}
    // this.openModal();
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  openModal() {
    this._modalService.open(LoginComponent, {windowClass: 'success-modal', backdrop: false});
    // setTimeout(this._modalService.dismissAll, 1000);
    // this._modalService.open(LoginComponent, {backdrop: false});
  }
  closeModal() {
    this.currentModal.dismiss();
  }
}


