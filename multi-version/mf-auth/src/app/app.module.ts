import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { MicroAppRoutingModule } from '@angular-architects/microapp';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // MicroAppRoutingModule.forMicroApp({ name: 'auth' }),
    AppRoutingModule,
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('mf-auth-root', customElement);
  }
}
