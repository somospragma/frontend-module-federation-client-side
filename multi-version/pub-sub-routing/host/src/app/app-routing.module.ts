import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
  startsWith,
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-a',
  },
  {
    path: '',
    loadChildren: () => import('./host/host.module').then((m) => m.HostModule),
  },
  {
    matcher: startsWith('authentication'),
    pathMatch: 'prefix',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'mf-authentication',
      exposedModule: './web-components',
      elementName: 'mf-authentication-root',
    } as WebComponentWrapperOptions,
  },
  {
    matcher: startsWith('home'),
    pathMatch: 'prefix',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'mf-home',
      exposedModule: './web-components',
      elementName: 'mf-home-root',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
