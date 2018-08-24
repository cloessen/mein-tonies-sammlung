import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SettingsComponent } from './users/settings/settings.component';
import { ToniesService } from './shared/tonies.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OverviewComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ToniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
