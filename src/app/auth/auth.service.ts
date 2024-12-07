import { Injectable } from '@angular/core';
import { Login } from './login.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginKey = environment.loginKey;

  constructor() { }

  login(loginData: Login) {
    localStorage.setItem(this.loginKey, JSON.stringify(loginData));
    return;
  }

  logout() {
    localStorage.removeItem(this.loginKey);
    return;
  }
}
