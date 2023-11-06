import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';

import { NgMaterialsModule } from '@amara/ng-materials';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgMaterialsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    RouterModule,
    AuthModule.forRoot({
      domain: 'dev-amara.us.auth0.com',
      clientId: 'RIi0h8rNwrx9pn9zW1CNSyOYHDYsIqtJ',
      authorizationParams: {
        redirect_uri: window.location.origin,

        // Request this audience at user authentication time
        audience: 'https://dev-amara.us.auth0.com/api/v2/',

        // Request this scope at user authentication time
        scope: 'read:current_user',
      },
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://{yourDomain}/api/v2/' (note the asterisk)
            uri: 'https://dev-amara.us.auth0.com/api/v2/*',
            tokenOptions: {
              authorizationParams: {
                // The attached token should target this audience
                audience: 'https://dev-amara.us.auth0.com/api/v2/',

                // The attached token should have these scopes
                scope: 'read:current_user'
              }
            }
          }
        ],
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
