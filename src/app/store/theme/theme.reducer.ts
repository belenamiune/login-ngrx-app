import { createReducer, on } from '@ngrx/store';
import { setTheme } from './theme.actions';

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: 'light',
};

export const themeReducer = createReducer(
  initialState,
  on(setTheme, (state, { theme }) => ({ ...state, theme }))
);
