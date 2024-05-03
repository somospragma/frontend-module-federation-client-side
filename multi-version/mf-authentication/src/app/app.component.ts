import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { connectRouter } from './connect-router';
import { MicroAppRoutingModule } from '@angular-architects/microapp';

declare var require: any;
const packageJson = require('../../package.json');
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    RouterLink,
    // MicroAppRoutingModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf-authentication';
  ngVersion = packageJson.dependencies['@angular/core'];
  primeNgVersion = packageJson.dependencies['primeng'];

  constructor() {
    // connectRouter();
  }
}
