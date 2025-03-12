import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private readonly USERNAME_KEY = 'username';

  login(email: string, password: string): Observable<{ token: string; username: string }> {
    if (email === 'admin' && password === '123456') {
      return of({ token: 'mocked-jwt-token', username: 'Admin' });
    }
    return of({ token: '', username: '' });
  }

  setSession(token: string, username: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USERNAME_KEY, username);
  }

  clearSession(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
  }

  getStoredUser() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const username = localStorage.getItem(this.USERNAME_KEY);
    return token && username ? { token, username } : null;
  }
}
