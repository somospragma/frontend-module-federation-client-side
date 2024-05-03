import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PageGComponent } from './pages/page-g/page-g.component';
import { PageHComponent } from './pages/page-h/page-h.component';


@NgModule({
  declarations: [
    PageGComponent,
    PageHComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
