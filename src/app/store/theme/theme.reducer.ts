import { createReducer, on } from '@ngrx/store';
import { setTheme } from './theme.actions';

export interface ThemeState {
  theme: string;
}

const storedTheme = localStorage.getItem('theme') || 'light';

const initialState: ThemeState = {
  theme: storedTheme
};

export const themeReducer = createReducer(
  initialState,
  on(setTheme, (state, { theme }) => {
    localStorage.setItem('theme', theme);
    return { ...state, theme };
  })
);
