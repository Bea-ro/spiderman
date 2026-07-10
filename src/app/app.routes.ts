import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((c) => c.Home),
    title: 'Spiderman Project',
  },
  {
    path: 'developed',
    loadComponent: () => import('./pages/developed/developed').then((c) => c.Developed),
    title: 'Spiderman Developer · TWS',
  },
];
