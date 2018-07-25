import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { DriversRoutingModule } from '@app/drivers/drivers-routing.module';
import { DriversComponent } from '@app/drivers/drivers.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    DriversRoutingModule
  ],
  declarations: [
    DriversComponent
  ],
  providers: [
  ]
})
export class DriversModule { }
