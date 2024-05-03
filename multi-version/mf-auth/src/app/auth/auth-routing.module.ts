import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGComponent } from './pages/page-g/page-g.component';
import { PageHComponent } from './pages/page-h/page-h.component';

const routes: Routes = [
  {
    path: 'page-g',
    component: PageGComponent,
  },
  {
    path: 'page-h',
    component: PageHComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
