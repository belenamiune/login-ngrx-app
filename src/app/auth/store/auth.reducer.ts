import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '@auth/store/auth.actions';

export interface AuthState {
  username: string | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  username: null,
  token: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginSuccess, (state, { token, username }) => ({
    ...state,
    token,
    username,
    loading: false,
    error: null
  })),
  on(AuthActions.loginError, (state, { error }) => ({ ...state, loading: false, error })),
  on(AuthActions.logout, () => initialState)
);
