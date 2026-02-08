import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'landing',
    loadComponent: () =>
      import('./features/landing/landing').then((m) => m.Landing),
    title: 'Track My Life',
  },
  {
    path: 'home',
    title: 'Home - Track My Life',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login').then((m) => m.Login),
    title: 'Login - Track My Life',
  },
  {
    path: '**',
    redirectTo: 'landing',
  },
];
