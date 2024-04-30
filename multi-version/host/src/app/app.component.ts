import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any;
const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Host';
  ngVersion = packageJson.dependencies['@angular/core'];
  primeNGVersion = packageJson.dependencies['primeng'];

  constructor() {
    (globalThis as any).router = inject(Router);
  }
}
