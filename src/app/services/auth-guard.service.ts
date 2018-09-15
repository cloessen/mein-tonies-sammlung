import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { t } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _auth: AuthService) { }

  canActivate(): boolean {
    return this._auth.getAuthState().subscribe(data => !!data);
  }
}
