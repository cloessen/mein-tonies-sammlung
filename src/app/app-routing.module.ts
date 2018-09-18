import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './users/settings/settings.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'collection',
    component: OverviewComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService]

  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
