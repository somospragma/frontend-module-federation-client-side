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
  title = 'mf-bills';
  ngVersion = packageJson.dependencies['@angular/core'];

  constructor(private router: Router) {}

  goToHostPageA() {
    this.router.navigate([{ outlets: { shell: ['page-a'] } }]);
  }
}
