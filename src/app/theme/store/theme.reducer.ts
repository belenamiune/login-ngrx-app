import { createReducer, on } from '@ngrx/store';
import { changeTheme } from '@theme/store/theme.actions';

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: 'light',
};

export const themeReducer = createReducer(
  initialState,
  on(changeTheme, (state, { theme }) => ({
    ...state,
    theme
  }))
);
