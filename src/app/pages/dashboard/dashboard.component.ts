import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsername, selectIsAuthenticated } from '../../store/auth/auth.selectors';
import { logout } from '../../store/auth/auth.actions';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class DashboardComponent {
  username$;
  isAuthenticated$;

  constructor(private store: Store, private route: Router) {
  this.username$ =  this.store.select(selectUsername);
  this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }

  onLogout() {
    this.store.dispatch(logout());
    this.route.navigate(['**'])
  }
}
