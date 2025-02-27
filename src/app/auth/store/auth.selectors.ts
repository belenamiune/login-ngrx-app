import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '@auth/store/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUsername = createSelector(
  selectAuthState,
  (state) => state.username
);

export const selectLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectAuthState,
  (state) => state.error
);
