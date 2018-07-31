import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { DriversRoutingModule } from '@app/drivers/drivers-routing.module';
import { DriversComponent } from '@app/drivers/drivers.component';
import { DriversService } from '@app/drivers/drivers.service';

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
    DriversService
  ]
})
export class DriversModule { }
