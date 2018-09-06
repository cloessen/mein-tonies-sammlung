import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ToniesService } from './services/tonies.service';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
// import { ModalsService } from './services/modals.service';

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
import { LoginComponent } from './shared/modals/login/login.component';
import { TonieItemComponent } from './tonie-item/tonie-item.component';


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
    LoginComponent,
    TonieItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [ToniesService, AlertService, AuthService],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
