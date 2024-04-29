import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { createCustomElement } from '@angular/elements';

(async () => {
  const app = await createApplication({
    providers: [
      (globalThis as any).ngZone
        ? { provide: NgZone, useValue: (globalThis as any).ngZone }
        : [],
      provideRouter(routes),
    ],
  });

  const mfAuthenticationRoot = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mf-auth-root', mfAuthenticationRoot);
})();
