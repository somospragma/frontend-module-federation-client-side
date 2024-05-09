import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { MfNotification, RouterState } from './notifier/mf-notifier.interface';
import { RoutingNotifier } from './notifier/mf-notifier.util';

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

    RoutingNotifier.notify(mfNotification);
  }
}
