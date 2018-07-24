import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { OrderRoutingModule } from '@app/order/order-routing.module';
import { OrderComponent } from '@app/order/order.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    OrderRoutingModule
  ],
  declarations: [
    OrderComponent
  ]
})
export class OrderModule { }
