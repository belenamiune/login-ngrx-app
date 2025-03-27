import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideStore, } from '@ngrx/store';
import { routerReducer } from "@ngrx/router-store";

import { routes } from '@app/app.routes';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from '@auth/store/auth.effects';
import { authReducer } from '@auth/store/auth.reducer';
import { ThemeEffects } from '@theme/store/theme.effects';
import { themeReducer } from '@theme/store/theme.reducer';
import { booksReducer } from '@books/store/books.reducer';
import { BooksEffects } from '@books/store/books.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideEffects(AuthEffects, ThemeEffects, BooksEffects),
    provideStore({
      route: routerReducer,
      auth: authReducer,
      theme: themeReducer,
      books: booksReducer
    })
  ]
};
