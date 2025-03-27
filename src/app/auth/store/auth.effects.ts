import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '@auth/services/auth.service';
import * as AuthActions from '@auth/store/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map(({ token, username }) =>
            token
              ? AuthActions.loginSuccess({ token, username })
              : AuthActions.loginError({ error: 'Credenciales incorrectas' })
          ),
          catchError(() => of(AuthActions.loginError({ error: 'Error de autenticación' })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ token, username }) => {
          this.authService.setSession(token, username);
          this.router.navigate(['/dashboard']);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.authService.clearSession();
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );
}
