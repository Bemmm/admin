import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DataScrollerModule } from 'primeng/datascroller';
import { DialogModule } from 'primeng/dialog';
import { LoaderComponent } from '@app/shared/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    DataScrollerModule,
    DialogModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DataScrollerModule,
    DialogModule,
    LoaderComponent
  ]
})
export class SharedModule { }
