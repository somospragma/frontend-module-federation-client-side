import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDComponent } from './page-d/page-d.component';
import { PageCComponent } from './page-c/page-c.component';

const routes: Routes = [
  {
    path: 'page-c',
    component: PageCComponent,
  },
  {
    path: 'page-d',
    component: PageDComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
