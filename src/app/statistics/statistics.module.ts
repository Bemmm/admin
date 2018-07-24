import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { StatisticsRoutingModule } from '@app/statistics/statistics-routing.module';
import { StatisticsComponent } from '@app/statistics/statistics.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    StatisticsRoutingModule
  ],
  declarations: [
    StatisticsComponent
  ],
  providers: [
  ]
})
export class StatisticsModule { }
