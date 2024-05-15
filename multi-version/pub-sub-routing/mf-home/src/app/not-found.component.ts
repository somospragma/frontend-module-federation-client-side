import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MfNotification, RouterState } from './mf-notification.interface';
import PubSub from 'pubsub-js';
import { ROUTING_CONSTANTS } from './routing.constants';

@Component({
  selector: 'app-not-found',
  template: '',
})
export class NotFoundComponent {
  constructor(private location: Location) {
    const mfNotification: MfNotification = {
      url: `${globalThis.location.pathname.substring(1)}${
        globalThis.location.search
      }`,
      state: this.location.getState() as RouterState,
    };

    PubSub.publish(ROUTING_CONSTANTS.NOTIFYHOST, mfNotification);
  }
}
