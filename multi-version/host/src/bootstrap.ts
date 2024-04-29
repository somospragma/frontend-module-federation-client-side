import { bootstrap } from '@angular-architects/module-federation-tools';

import { AppModule } from './app/app.module';

bootstrap(AppModule, {
  production: false,
  appType: 'shell',
}).catch((err) => console.error(err));
