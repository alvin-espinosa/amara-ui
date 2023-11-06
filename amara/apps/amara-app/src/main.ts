import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

// This is defined in our .env file.
console.log('>>> NX_API_URL', process.env['NX_API_URL']);
console.log('>>> NODE_ENV', process.env['NODE_ENV']);
console.log('>>> NX_AUTH0_DOMAIN', process.env['NX_AUTH0_DOMAIN']);
console.log('>>> NX_AUTH0_CLIENT_ID', process.env['NX_AUTH0_CLIENT_ID']);
console.log('>>> environment', environment.production);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
