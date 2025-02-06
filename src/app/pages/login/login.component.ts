import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth/auth.actions';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { selectTheme } from '../../store/theme/theme.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  isDarkTheme$;

  constructor(private fb: FormBuilder, private store: Store, private route: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
    this.isDarkTheme$ = this.store.select(selectTheme);
  }
  

  onClickLogin() {
    const { username, password } = this.loginForm.value;

    const validUser = 'admin';
    const validPassword = '123456';

    if (username === validUser && password === validPassword) {
      const mockToken = '123tokenmock';
      this.store.dispatch(login({ username, token: mockToken }));
      setTimeout(() => {
      console.log("paso")
      this.route.navigate(['/dashboard']);
      }, 1000);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
