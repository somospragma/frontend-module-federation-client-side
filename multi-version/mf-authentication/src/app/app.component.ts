import { ButtonModule } from 'primeng/button';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { connectRouter } from './connect-router';

declare var require: any;
const packageJson = require('../../package.json');
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = signal('mf-authentication');
  ngVersion = signal(packageJson.dependencies['@angular/core']);
  primeNgVersion = signal(packageJson.dependencies['primeng']);

  constructor() {
    connectRouter();
  }
}
