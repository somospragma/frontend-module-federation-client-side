import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgZone, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { createCustomElement } from '@angular/elements';
import { MicroAppRoutingModule } from '@angular-architects/microapp';
// import { RouterGlobalUtil } from './app/router-global.util';

(async () => {
  const gThis = globalThis as any;
  const app = await createApplication({
    providers: [
      gThis.ngZone ? { provide: NgZone, useValue: gThis.ngZone } : [],
      // gThis.router ? { provide: RouterGlobalUtil, useValue: gThis.router } : [],
      // importProvidersFrom(
      //   MicroAppRoutingModule.forMicroApp({ name: 'mf-auth' })
      // ),
      provideRouter(routes),
    ],
  });

  const mfAuthenticationRoot = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mf-authentication-root', mfAuthenticationRoot);
})();
