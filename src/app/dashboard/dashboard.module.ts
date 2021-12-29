import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { ContainerComponent } from './view-dashboard/container/container.component';
import { CookComponent } from './view-dashboard/cook/cook.component';
import { WaiterComponent } from './view-dashboard/waiter/waiter.component';
import { OrdersComponent } from './view-dashboard/orders/orders.component';
import { InventoryComponent } from './view-dashboard/inventory/inventory.component';
import { PickupComponent } from './view-dashboard/pickup/pickup.component';
import { ParkingComponent } from './view-dashboard/parking/parking.component';
import { AdminComponent } from './view-dashboard/admin/admin.component';


@NgModule({
  declarations: [
    ViewDashboardComponent,
    ContainerComponent,
    CookComponent,
    WaiterComponent,
    OrdersComponent,
    InventoryComponent,
    PickupComponent,
    ParkingComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
