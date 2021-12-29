import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './view-dashboard/admin/admin.component';
import { CookComponent } from './view-dashboard/cook/cook.component';
import { InventoryComponent } from './view-dashboard/inventory/inventory.component';
import { OrdersComponent } from './view-dashboard/orders/orders.component';
import { ParkingComponent } from './view-dashboard/parking/parking.component';
import { PickupComponent } from './view-dashboard/pickup/pickup.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { WaiterComponent } from './view-dashboard/waiter/waiter.component';

const routes: Routes = [
  {path: '', component: ViewDashboardComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'cook', component: CookComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'parking', component: ParkingComponent},
  {path: 'pickup', component: PickupComponent},
  {path: 'waiter', component: WaiterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
