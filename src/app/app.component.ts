import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Store } from '@ngrx/store';
import { selectTheme } from './store/theme/theme.selectors';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'login-app-ngrx';
    constructor(private store: Store) {
      this.store.select(selectTheme).subscribe((theme) => {
        document.documentElement.setAttribute('data-theme', theme);
      });
    }
}
