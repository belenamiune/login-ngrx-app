import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string): Observable<{ token: string; username: string }> {
    if (email === 'admin' && password === '123456') {
      return of({ token: 'mocked-jwt-token', username: 'Admin' });
    }
    return of({ token: '', username: '' });
  }
}
