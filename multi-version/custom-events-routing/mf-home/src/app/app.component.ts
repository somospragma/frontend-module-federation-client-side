import { connectRouter } from '@angular-architects/module-federation-tools';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MfNotification } from './home/notifier/mf-notifier.interface';

declare var require: any;
const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostListener('document:notifyMf', ['$event'])
  onNotifyMFNavigate({ detail: { url, state } }: CustomEvent<MfNotification>) {
    if (url.includes('home')) {
      this.router.navigate([url], { state });
    }
  }

  title = 'mf-home';
  ngVersion = packageJson.dependencies['@angular/core'];
  materialVersion = packageJson.dependencies['@angular/material'];

  constructor(private router: Router) {
    connectRouter(this.router, false);
  }
}
