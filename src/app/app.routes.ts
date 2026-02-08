import { Routes } from '@angular/router';
import { canMatchLoggedIn, canMatchNotLoggedIn } from './core/auth.guard';

export const routes: Routes = [
  // When path is '' (root), check canMatchNotLoggedIn first.
  // If user is NOT logged in, load Landing.
  // If user IS logged in, skip this and check the next '' path.
  {
    path: '',
    canMatch: [canMatchNotLoggedIn],
    loadComponent: () =>
      import('./features/landing/landing').then((m) => m.Landing),
    title: 'Welcome to Track My Life',
  },
  {
    path: '',
    canMatch: [canMatchLoggedIn],
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        title: 'Dashboard - Track My Life',
        loadComponent: () =>
          import('./features/home/dashboard/dashboard').then(
            (m) => m.Dashboard,
          ),
      },
    ],
  },
  {
    path: 'auth',
    canMatch: [canMatchLoggedIn],
    redirectTo: '',
  },
  {
    path: 'auth',
    canMatch: [canMatchNotLoggedIn],
    loadComponent: () => import('./features/auth/login').then((m) => m.Login),
    title: 'Auth - Track My Life',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
