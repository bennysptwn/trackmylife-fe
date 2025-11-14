import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
    title: 'Track My Life',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
