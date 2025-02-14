import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setTheme } from './theme.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ThemeEffects {
  constructor(private actions$: Actions) {}

  setTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setTheme),
        tap(({ theme }) => {
          document.documentElement.setAttribute('data-theme', theme);
        })
      ),
    { dispatch: false }
  );
}
