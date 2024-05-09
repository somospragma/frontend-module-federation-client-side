import { ButtonModule } from 'primeng/button';
import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { connectRouter } from './connect-router';
import { MfNotification } from './notifier/mf-notifier.interface';

declare var require: any;
const packageJson = require('../../package.json');
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly router = inject(Router);

  @HostListener('document:notifyMf', ['$event'])
  onNotifyMFNavigate({ detail: { url, state } }: CustomEvent<MfNotification>) {
    if (url.includes('authentication')) {
      this.router.navigate([url], { state });
    }
  }

  title = 'mf-authentication';
  ngVersion = packageJson.dependencies['@angular/core'];
  primeNgVersion = packageJson.dependencies['primeng'];

  constructor() {
    connectRouter();
  }
}
