import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { CompaniesComponent } from '@app/companies/companies.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/companies', pathMatch: 'full' },
    { path: 'companies', component: CompaniesComponent, data: { title: extract('companies') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CompaniesRoutingModule { }
