import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
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
    constructor(
      private store: Store,
      private renderer: Renderer2,
      @Inject(DOCUMENT) private document: Document
    ) {
      this.store.select(selectTheme).subscribe((theme) => {
        this.renderer.setAttribute(this.document.documentElement, 'data-theme', theme);
      });
    }
}
