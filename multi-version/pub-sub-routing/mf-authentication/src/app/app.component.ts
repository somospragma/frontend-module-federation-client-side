import { ButtonModule } from 'primeng/button';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { connectRouter } from './connect-router';
import { MfNotification } from './mf-notification.interface';
import { ROUTING_CONSTANTS } from './routing.constants';

declare var require: any;
const packageJson = require('../../package.json');
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);

  title = 'mf-authentication';
  ngVersion = packageJson.dependencies['@angular/core'];
  primeNgVersion = packageJson.dependencies['primeng'];

  constructor() {
    connectRouter();
  }

  ngOnInit(): void {
    this.subscribeToPubSubRoutingEvents();
  }

  private subscribeToPubSubRoutingEvents() {
    PubSub.subscribe(
      ROUTING_CONSTANTS.NOTIFYMF,
      (__, { url, state }: MfNotification) => {
        if (url.includes('authentication')) {
          this.router.navigate([url], { state: state });
        }
      }
    );
  }

  ngOnDestroy(): void {
    PubSub.unsubscribe(ROUTING_CONSTANTS.NOTIFYMF);
  }
}
