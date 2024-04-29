import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { PageCComponent } from './page-c/page-c.component';
import { PageDComponent } from './page-d/page-d.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [PageCComponent, PageDComponent],
  imports: [CommonModule, AuthenticationRoutingModule, ButtonModule],
})
export class AuthenticationModule {}
