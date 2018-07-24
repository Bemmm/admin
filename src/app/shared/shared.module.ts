import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { LoaderComponent } from '@app/shared/loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableModule,
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
