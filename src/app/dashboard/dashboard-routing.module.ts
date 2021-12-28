import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './view-dashboard/container/container.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';

const routes: Routes = [
  {path: '', component: ViewDashboardComponent},
  {path: ':id', component: ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
