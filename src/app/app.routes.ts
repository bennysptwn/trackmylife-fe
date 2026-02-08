import { Routes } from '@angular/router';
import { canMatchLoggedIn, canMatchNotLoggedIn } from './core/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canMatch: [canMatchNotLoggedIn],
    loadComponent: () =>
      import('./features/landing/landing').then((m) => m.Landing),
    title: 'Track My Life',
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
    canMatch: [canMatchNotLoggedIn],
    loadComponent: () => import('./features/auth/login').then((m) => m.Login),
    title: 'Login - Track My Life',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
