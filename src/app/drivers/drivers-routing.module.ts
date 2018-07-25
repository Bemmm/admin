import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { DriversComponent } from '@app/drivers/drivers.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/drivers', pathMatch: 'full' },
    { path: 'drivers', component: DriversComponent, data: { title: extract('drivers') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DriversRoutingModule { }
