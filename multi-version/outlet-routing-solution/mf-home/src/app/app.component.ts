import { connectRouter } from '@angular-architects/module-federation-tools';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any;
const packageJson = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf-home';
  ngVersion = packageJson.dependencies['@angular/core'];
  materialVersion = packageJson.dependencies['@angular/material'];

  constructor(private router: Router) {
    // connectRouter(this.router, false);
  }
}
