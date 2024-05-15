import {
  Component,
  inject,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterState, HostNotification } from './host-notification.interface';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import PubSub from 'pubsub-js';
import { ROUTING_CONSTANTS } from './routing.constants';

declare var require: any;
const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly router: Router = inject(Router);
  private readonly location: Location = inject(Location);

  private subcription!: Subscription;

  title = 'Host';
  ngVersion = packageJson.dependencies['@angular/core'];
  primeNGVersion = packageJson.dependencies['primeng'];

  ngOnInit() {
    this.subscribeToPubSubRoutingEvents();
    this.subscribeToHostRoutingChanges();
  }

  private subscribeToPubSubRoutingEvents() {
    PubSub.subscribe(
      ROUTING_CONSTANTS.NOTIFYHOST,
      (__, data: HostNotification) => {
        this.router.navigate([data.url], { state: data.state });
      }
    );
  }

  private subscribeToHostRoutingChanges() {
    this.subcription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        PubSub.publish(ROUTING_CONSTANTS.NOTIFYMF, {
          url: event.urlAfterRedirects,
          state: this.location.getState() as RouterState,
        });
      }
    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
    PubSub.unsubscribe(ROUTING_CONSTANTS.NOTIFYHOST);
  }
}
