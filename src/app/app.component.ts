import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavbarComponent } from './shell/components/navbar/navbar.component';
import { ThemeService } from './theme/services/theme.service';
import { changeTheme } from './theme/store/theme.actions';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'login-app-ngrx';
  constructor(private store: Store, private themeService: ThemeService) {
    const savedTheme = this.themeService.getTheme();
    this.store.dispatch(changeTheme({ theme: savedTheme }));
  }
}
