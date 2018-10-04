import { Component, HostListener, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginMenuComponent } from '../login-menu/login-menu.component';
import { SignupMenuComponent } from '../signup-menu/signup-menu.component';
import { ActivatedRoute } from '@angular/router';

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
    private _modalService: NgbModal,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.authState$ = this._auth.getAuthState();
    this._auth.getAuthState().subscribe(state => state ? console.log( state) : null );
    this._route.queryParams.subscribe(params => {
      if (params.redirect === 'login') {
        this.handleLogin();
      }
    });
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


