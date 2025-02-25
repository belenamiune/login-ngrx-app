import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated, selectUsername } from '../../../auth/store/auth.selectors';
import { selectTheme } from '../../../theme/store/theme.selectors';
import { logout } from '../../../auth/store/auth.actions';
import { changeTheme } from '../../../theme/store/theme.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule]
})
export class NavbarComponent {
  isAuthenticated$;
  username$;
  theme$: Observable<string>;

  constructor(private store: Store) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.username$ = this.store.select(selectUsername);
    this.theme$ = this.store.select(selectTheme);
  }

  onLogout() {
    this.store.dispatch(logout());
  }

  onToggleTheme(currentTheme: string) {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.store.dispatch(changeTheme({ theme: newTheme }));
  }
}
