import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from './auth.services';

export const canMatchLoggedIn: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  return authService.isLoggedIn();
};

export const canMatchNotLoggedIn: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  return !authService.isLoggedIn();
};
