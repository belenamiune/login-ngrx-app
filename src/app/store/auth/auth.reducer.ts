import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export interface AuthState {
  username: string | null;
  token: string | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  username: null,
  token: null,
  isAuthenticated: false
};

export const authReducer = createReducer(
  initialState,
  on(login, (state, { username, token }) => ({
    ...state,
    username,
    token,
    isAuthenticated: true
  })),
  on(logout, (state) => ({
    ...state,
    username: null,
    token: null,
    isAuthenticated: false
  }))
);
