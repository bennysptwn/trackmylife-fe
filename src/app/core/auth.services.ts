import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  platformId = inject(PLATFORM_ID);
  isLoggedIn = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.isLoggedIn.set(localStorage.getItem('isLoggedIn') === 'true');
    }
  }

  login() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('isLoggedIn', 'true');
    }
    this.isLoggedIn.set(true);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('isLoggedIn');
    }
    this.isLoggedIn.set(false);
  }
}
