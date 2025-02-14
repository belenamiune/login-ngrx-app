import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated, selectUsername } from '../../store/auth/auth.selectors';
import { logout } from '../../store/auth/auth.actions';
import { CommonModule } from '@angular/common';
import { selectTheme } from '../../store/theme/theme.selectors';
import { setTheme } from '../../store/theme/theme.actions';
import { take } from 'rxjs';

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
  theme$;

  constructor(private store: Store) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.username$ = this.store.select(selectUsername);
    this.theme$ = this.store.select(selectTheme);
  }

  onLogout() {
    this.store.dispatch(logout());
  }

  toggleTheme() {
    this.store.select(selectTheme).pipe(take(1)).subscribe((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.store.dispatch(setTheme({ theme: newTheme }));
    });
  }
}
