import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';

@NgModule({
  declarations: [PageAComponent, PageBComponent],
  imports: [CommonModule, HostRoutingModule],
})
export class HostModule {}
