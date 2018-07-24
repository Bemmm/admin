import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { TrucksComponent } from '@app/trucks/trucks.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/trucks', pathMatch: 'full' },
    { path: 'trucks', component: TrucksComponent, data: { title: extract('trucks') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TrucksRoutingModule { }
