import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { OrderComponent } from '@app/order/order.component';

const routes: Routes = [
  Route.withShell([
    { path: 'order', component: OrderComponent, data: { title: extract('Order') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrderRoutingModule { }
