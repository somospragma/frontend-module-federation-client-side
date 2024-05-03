import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsRoutingModule } from './bills-routing.module';
import { PageIComponent } from './page-i/page-i.component';
import { PageJComponent } from './page-j/page-j.component';


@NgModule({
  declarations: [
    PageIComponent,
    PageJComponent
  ],
  imports: [
    CommonModule,
    BillsRoutingModule
  ]
})
export class BillsModule { }
