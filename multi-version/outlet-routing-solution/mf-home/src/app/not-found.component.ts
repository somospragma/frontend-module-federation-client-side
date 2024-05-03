import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterGlobalUtil } from './router-global.util';

interface RouterState {
  [k: string]: any;
}

@Component({
  selector: 'app-not-found',
  template: '',
})
export class NotFoundComponent {
  constructor(
    private readonly globalRouter: RouterGlobalUtil,
    private readonly location: Location
  ) {
    this.globalRouter.navigate(
      [
        `${globalThis.location.pathname.substring(1)}${
          globalThis.location.search
        }`,
      ],
      { state: this.location.getState() as RouterState }
    );
  }
}
