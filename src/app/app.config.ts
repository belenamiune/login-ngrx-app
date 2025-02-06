import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideStore, } from '@ngrx/store';
import {routerReducer } from "@ngrx/router-store";

import { routes } from './app.routes';
import { authReducer } from './store/auth/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      route: routerReducer,
      auth: authReducer
    }),
]
};
