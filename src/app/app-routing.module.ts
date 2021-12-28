import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(mod => AuthenticationModule) },
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mod => DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
