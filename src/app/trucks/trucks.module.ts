import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { TrucksRoutingModule } from '@app/trucks/trucks-routing.module';
import { TrucksComponent } from '@app/trucks/trucks.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    TrucksRoutingModule
  ],
  declarations: [
    TrucksComponent
  ],
  providers: [
  ]
})
export class TrucksModule { }
