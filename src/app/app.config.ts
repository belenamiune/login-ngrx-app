import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideStore, } from '@ngrx/store';
import {routerReducer } from "@ngrx/router-store";

import { routes } from './app.routes';
import { authReducer } from './store/auth/auth.reducer';
import { themeReducer } from './store/theme/theme.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideEffects(AuthEffects),
    provideStore({
      route: routerReducer,
      auth: authReducer,
      theme: themeReducer
    })
]
};
