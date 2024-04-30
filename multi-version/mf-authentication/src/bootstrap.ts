import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { createCustomElement } from '@angular/elements';
import { RouterGlobalUtil } from './app/router-global.util';

(async () => {
  const gThis = globalThis as any;
  const app = await createApplication({
    providers: [
      gThis.ngZone ? { provide: NgZone, useValue: gThis.ngZone } : [],
      gThis.router ? { provide: RouterGlobalUtil, useValue: gThis.router } : [],
      provideRouter(routes),
    ],
  });

  const mfAuthenticationRoot = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mf-auth-root', mfAuthenticationRoot);
})();
