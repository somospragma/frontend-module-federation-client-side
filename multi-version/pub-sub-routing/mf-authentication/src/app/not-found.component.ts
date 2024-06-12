import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { MfNotification, RouterState } from './mf-notification.interface';
import PubSub from 'pubsub-js';
import { ROUTING_CONSTANTS } from './routing.constants';

@Component({
  selector: 'app-not-found',
  template: '',
  standalone: true,
})
export class NotFoundComponent {
  private readonly location = inject(Location);

  constructor() {
    const mfNotification: MfNotification = {
      url: `${location.pathname.substring(1)}${location.search}`,
      state: this.location.getState() as RouterState,
    };

    PubSub.publish(ROUTING_CONSTANTS.NOTIFYHOST, mfNotification);
  }
}
