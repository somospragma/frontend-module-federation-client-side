import { MatButtonModule } from '@angular/material/button';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { RouterGlobalUtil } from './router-global.util';
import { MicroAppRoutingModule } from '@angular-architects/microapp';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule],
  providers: [
    (globalThis as any).router
      ? { provide: RouterGlobalUtil, useValue: (globalThis as any).router }
      : [],
  ],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('mf-home-root', customElement);
  }
}
