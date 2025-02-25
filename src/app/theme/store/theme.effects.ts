import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { changeTheme } from './theme.actions';
import { ThemeService } from '../services/theme.service';

@Injectable()
export class ThemeEffects {
  constructor(private actions$: Actions, private themeService: ThemeService) {}

  changeTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(changeTheme),
        tap(({ theme }) => this.themeService.setTheme(theme))
      ),
    { dispatch: false }
  );
}
