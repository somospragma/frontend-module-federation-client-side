import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIComponent } from './page-i/page-i.component';
import { PageJComponent } from './page-j/page-j.component';

const routes: Routes = [
  {
    path: 'page-i',
    component: PageIComponent,
  },
  {
    path: 'page-j',
    component: PageJComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsRoutingModule {}
