import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbDropdownModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ToniesService } from './services/tonies.service';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SettingsComponent } from './users/settings/settings.component';
import { TonieCardComponent } from './tonie-card/tonie-card.component';
import { AlertComponent } from './shared/alert/alert.component';
import { BirthdayComponent } from './shared/modals/birthday/birthday.component';
import { LoginSuccessComponent } from './shared/modals/login-success/login-success.component';
import { TonieItemComponent } from './tonie-item/tonie-item.component';
import { LogoutSuccessComponent } from './shared/modals/logout-success/logout-success.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { LoginMenuComponent } from './layout/login-menu/login-menu.component';
import { SignupMenuComponent } from './layout/signup-menu/signup-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupSuccessComponent } from './shared/modals/signup-success/signup-success.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthGuardService } from './services/auth-guard.service';
import { MyToniesComponent } from './overview/my-tonies/my-tonies.component';
import { AllToniesComponent } from './overview/all-tonies/all-tonies.component';
import { MyWishlistComponent } from './overview/my-wishlist/my-wishlist.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app.reducers';
import { GlobalConfig, ToastrModule } from 'ngx-toastr';


const globalToastrConfig: Partial<GlobalConfig> = {
  timeOut: 2000,
  extendedTimeOut: 1,
  maxOpened: 3,
  autoDismiss: true,
  positionClass: 'toast-top-center',
  easeTime: 300,
  progressBar: true
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OverviewComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    TonieCardComponent,
    AlertComponent,
    BirthdayComponent,
    TonieItemComponent,
    LoginSuccessComponent,
    LogoutSuccessComponent,
    LandingPageComponent,
    LoginMenuComponent,
    SignupMenuComponent,
    SignupSuccessComponent,
    MyToniesComponent,
    AllToniesComponent,
    MyWishlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    NgbDropdownModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ToastrModule.forRoot(globalToastrConfig)
  ],
  providers: [
    ToniesService,
    AlertService,
    AuthService,
    AuthGuardService
  ],
  entryComponents: [
    LoginSuccessComponent,
    LogoutSuccessComponent,
    LoginMenuComponent,
    SignupMenuComponent,
    SignupSuccessComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
