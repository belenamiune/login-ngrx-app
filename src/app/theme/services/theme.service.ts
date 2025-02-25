import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly STORAGE_KEY = 'theme';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  setTheme(theme: string): void {
    this.document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  getTheme(): string {
    return localStorage.getItem(this.STORAGE_KEY) || 'light';
  }
}
