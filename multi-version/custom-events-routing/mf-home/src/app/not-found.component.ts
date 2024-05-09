import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MfNotification } from './home/notifier/mf-notifier.interface';
import { MfNotifier } from './home/notifier/mf-notifier.util';

interface RouterState {
  [k: string]: any;
}

@Component({
  selector: 'app-not-found',
  template: '',
})
export class NotFoundComponent {
  constructor(private readonly location: Location) {
    const mfNotification: MfNotification = {
      url: `${globalThis.location.pathname.substring(1)}${
        globalThis.location.search
      }`,
      state: this.location.getState() as RouterState,
    };

    MfNotifier.notify(mfNotification);
  }
}
