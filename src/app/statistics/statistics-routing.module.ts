import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { StatisticsComponent } from '@app/statistics/statistics.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/statistics', pathMatch: 'full' },
    { path: 'statistics', component: StatisticsComponent, data: { title: extract('statistics') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StatisticsRoutingModule { }
