import { AuthState } from "./auth/store/auth.reducer";
import { ThemeState } from "./theme/store/theme.reducer";

export interface AppState {
  auth: AuthState;
  theme: ThemeState;
}
