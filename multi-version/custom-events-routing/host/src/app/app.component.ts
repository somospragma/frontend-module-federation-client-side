import {
  Component,
  inject,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  RouterState,
  HostNotification,
} from './host/notifier/host-notifier.interface';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { RoutingNotifier } from './host/notifier/host-notifier.util';

declare var require: any;
const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @HostListener('document:notifyHost', ['$event'])
  onNotifyHostNavigate({
    detail: { url, state },
  }: CustomEvent<HostNotification>) {
    this.router.navigate([url], { state });
  }

  private readonly router: Router = inject(Router);
  private readonly location: Location = inject(Location);

  private subcription!: Subscription;

  title = 'Host';
  ngVersion = packageJson.dependencies['@angular/core'];
  primeNGVersion = packageJson.dependencies['primeng'];

  ngOnInit() {
    this.subcription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        RoutingNotifier.notify({
          url: event.urlAfterRedirects,
          state: this.location.getState() as RouterState,
        });
      }
    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
