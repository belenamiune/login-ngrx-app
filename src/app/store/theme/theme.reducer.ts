import { createReducer, on } from '@ngrx/store';
import { toggleTheme } from '../theme/theme.actions';

export const initialState =  { isDark: false };

export const themeReducer = createReducer(
  initialState,
  on(toggleTheme, (state) => ({ isDark: !state.isDark }))
);
