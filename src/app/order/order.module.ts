import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { OrderRoutingModule } from '@app/order/order-routing.module';
import { OrderComponent } from '@app/order/order.component';
import { OrderService } from '@app/order/order.service';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    OrderRoutingModule
  ],
  declarations: [
    OrderComponent
  ],
  providers:[
    OrderService
  ]
})
export class OrderModule { }
