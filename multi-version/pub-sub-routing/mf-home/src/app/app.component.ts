import { connectRouter } from '@angular-architects/module-federation-tools';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MfNotification } from './mf-notification.interface';
import { ROUTING_CONSTANTS } from './routing.constants';

declare var require: any;
const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mf-home';
  ngVersion = packageJson.dependencies['@angular/core'];
  materialVersion = packageJson.dependencies['@angular/material'];

  constructor(private router: Router) {
    connectRouter(this.router, false);
  }

  ngOnInit(): void {
    this.subscribeToPubSubRoutingEvents();
  }

  private subscribeToPubSubRoutingEvents() {
    PubSub.subscribe(
      ROUTING_CONSTANTS.NOTIFYMF,
      (__, { url, state }: MfNotification) => {
        if (url.includes('home')) {
          this.router.navigate([url], { state: state });
        }
      }
    );
  }

  ngOnDestroy(): void {
    PubSub.unsubscribe(ROUTING_CONSTANTS.NOTIFYMF);
  }
}
