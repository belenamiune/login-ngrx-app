import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated, selectUsername } from '../../store/auth/auth.selectors';
import { logout } from '../../store/auth/auth.actions';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private store: Store, private route: Router) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.username$ = this.store.select(selectUsername);
  }

  onLogout() {
    this.store.dispatch(logout());
    this.route.navigate(['/login']);
  }
}
