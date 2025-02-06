import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface ThemeState {
  isDark: boolean;
}

export const selectThemeState = createFeatureSelector<ThemeState>('theme');
export const selectTheme = createSelector(selectThemeState, (state) => state.isDark);