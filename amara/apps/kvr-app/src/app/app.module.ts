import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SharedModule } from '@amara/shared';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule, authHttpInterceptorFn } from '@auth0/auth0-angular';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationFormComponent } from './features/reservation-form/reservation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationComponent } from './features/authentication/authentication.component';

@NgModule({
  declarations: [AppComponent, ReservationFormComponent, AuthenticationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,     
    SharedModule,
    ReactiveFormsModule,    
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AuthModule.forRoot({
      domain: `${process.env['NX_AUTH0_DOMAIN']}`, //'dev-amara.us.auth0.com',
      clientId: `${process.env['NX_AUTH0_CLIENT_ID']}`, //'RIi0h8rNwrx9pn9zW1CNSyOYHDYsIqtJ',
      authorizationParams: {
        redirect_uri: window.location.origin,

        // Request this audience at user authentication time
        audience: process.env['NX_AUTH0_AUDIENCE'],

        // Request this scope at user authentication time
        scope: 'read:current_user',
      },
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://{yourDomain}/api/v2/' (note the asterisk)
            uri: `https://${process.env['NX_AUTH0_DOMAIN']}/api/v2/*`, //'https://dev-amara.us.auth0.com/api/v2/*',
            tokenOptions: {
              authorizationParams: {
                // The attached token should target this audience
                audience: `https://${process.env['NX_AUTH0_DOMAIN']}/api/v2/`, //'https://dev-amara.us.auth0.com/api/v2/',

                // The attached token should have these scopes
                scope: 'read:current_user',
              },
            },
          },
          {
            uri: `https://localhost:7100/*`,
          },
          {
            uri: `https://amara-app.azurewebsites.net/*`,
          },
        ],
      },
    }),
  ],
  providers: [
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
    AuthHttpInterceptor,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
        floatLabel: 'always',
      },
    }
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
