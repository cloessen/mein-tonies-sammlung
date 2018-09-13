import { Component, HostListener, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginMenuComponent } from '../login-menu/login-menu.component';
import { SignupMenuComponent } from '../signup-menu/signup-menu.component';
// import { NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;
  public scrollPos = 0;
  public authState$: Observable<any>;

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
    this._auth.getAuthState().subscribe(state => state ? console.log( state) : null );
  }
  handleRegister() {
    this._modalService.open(SignupMenuComponent, {centered: true, windowClass: 'centered-modal'});
  }
  handleLogin() {
    this._modalService.open(LoginMenuComponent, {centered: true, windowClass: 'centered-modal'});
  }
  handleLogout() {
    this._auth.logout();
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}


