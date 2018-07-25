import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { LoaderComponent } from '@app/shared/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    TableModule,
    DialogModule,
    LoaderComponent
  ]
})
export class SharedModule { }
