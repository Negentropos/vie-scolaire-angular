import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, provideMomentDateAdapter} from '@angular/material-moment-adapter';
import 'moment/locale/fr';
import { httpInterceptorProviders } from './interceptors';
import { NgxWebstorageModule } from 'ngx-webstorage';



export const appConfig: ApplicationConfig = {
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    provideRouter(routes),
    provideClientHydration(), 
    provideAnimationsAsync(),provideHttpClient(withFetch()),
    provideMomentDateAdapter(),
    httpInterceptorProviders,
  ]
};
