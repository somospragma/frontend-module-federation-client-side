import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { createCustomElement } from '@angular/elements';

(async () => {
  const gThis = globalThis as any;
  const app = await createApplication({
    providers: [
      gThis.ngZone ? { provide: NgZone, useValue: gThis.ngZone } : [],
      provideRouter(routes),
    ],
  });

  const mfAuthenticationRoot = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mf-authentication-root', mfAuthenticationRoot);
})();
