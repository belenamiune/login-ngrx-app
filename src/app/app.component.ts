import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavbarComponent } from '@shell/components/navbar/navbar.component';
import { ThemeService } from '@theme/services/theme.service';
import { changeTheme } from '@theme/store/theme.actions';
import { AuthService } from '@auth/services/auth.service';
import * as AuthActions from '@auth/store/auth.actions';
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'login-app-ngrx';
  constructor(private store: Store, private themeService: ThemeService, private authService: AuthService) {
    const savedTheme = this.themeService.getTheme();
    this.store.dispatch(changeTheme({ theme: savedTheme }));
  }

  ngOnInit(): void {
    const user = this.authService.getStoredUser();
    if (user) {
      this.store.dispatch(AuthActions.loginSuccess(user));
    }
  }
}
