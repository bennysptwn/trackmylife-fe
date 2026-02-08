import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal<boolean>(localStorage.getItem('isLoggedIn') === 'true');

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedIn.set(true);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn.set(false);
  }
}
