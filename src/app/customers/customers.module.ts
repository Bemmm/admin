import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CustomersRoutingModule } from '@app/customers/customers-routing.module';
import { CustomersComponent } from '@app/customers/customers.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    CustomersRoutingModule
  ],
  declarations: [
    CustomersComponent
  ],
  providers: [
  ]
})
export class CustomersModule { }
