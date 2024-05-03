import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroAppRoutingModule } from '@angular-architects/microapp';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MicroAppRoutingModule.forShell({ name: 'shell' }),
    AppRoutingModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
