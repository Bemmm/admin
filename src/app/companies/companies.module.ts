import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CompaniesRoutingModule } from '@app/companies/companies-routing.module';
import { CompaniesComponent } from '@app/companies/companies.component';
import { CompaniesService } from '@app/companies/companies.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    CompaniesRoutingModule
  ],
  declarations: [
    CompaniesComponent
  ],
  providers: [
    CompaniesService
  ]
})
export class CompaniesModule { }
