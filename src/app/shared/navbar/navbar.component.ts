import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated, selectUsername } from '../../store/auth/auth.selectors';
import { logout } from '../../store/auth/auth.actions';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { selectTheme } from '../../store/theme/theme.selectors';
import { toggleTheme } from '../../store/theme/theme.actions';

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
  isDarkTheme$;

  constructor(private store: Store, private route: Router) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.username$ = this.store.select(selectUsername);
    this.isDarkTheme$ = this.store.select(selectTheme);
  }

  onLogout() {
    this.store.dispatch(logout());
    this.route.navigate(['/login']);
    this.store.dispatch(toggleTheme());
  }

  onToggleTheme() {
    this.store.dispatch(toggleTheme());
  }
}
