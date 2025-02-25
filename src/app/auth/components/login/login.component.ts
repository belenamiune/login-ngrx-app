import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { login } from '../../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';


  constructor(private fb: FormBuilder, private store: Store) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  
  onClickLogin() {
    const { username, password } = this.loginForm.value;

    const validUser = 'admin';
    const validPassword = '123456';

    if (username === validUser && password === validPassword) {
      const mockToken = '123tokenmock';
      this.store.dispatch(login({ username, token: mockToken }));
      setTimeout(() => {
      console.log("login successful");
      }, 1000);
    } else {
      console.log("login error");
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
