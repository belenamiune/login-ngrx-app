import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private html: HTMLElement;
  private readonly STORAGE_KEY = 'theme';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.html = this.document.documentElement;
    this.applyTheme(this.getTheme());
  }

  setTheme(theme: string): void {
    this.html.dataset['theme'] = theme;
    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  getTheme(): string {
    return localStorage.getItem(this.STORAGE_KEY) || 'light';
  }

  private applyTheme(theme: string): void {
    this.html.dataset['theme'] = theme;
  }
}
