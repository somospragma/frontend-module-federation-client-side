import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageEComponent } from './pages/page-e/page-e.component';
import { PageFComponent } from './pages/page-f/page-f.component';


@NgModule({
  declarations: [
    PageEComponent,
    PageFComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
