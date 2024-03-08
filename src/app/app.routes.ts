import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/filters/filters.component').then((mod) => mod.FiltersComponent),
  },
  {
    path: 'languages',
    loadComponent: () =>
      import('./features/filter/filter.component').then((mod) => mod.FilterComponent),
  },
  {
    path: 'authors',
    loadComponent: () =>
      import('./features/filter/filter.component').then((mod) => mod.FilterComponent),
  },
  {
    path: 'statuses',
    loadComponent: () =>
      import('./features/filter/filter.component').then((mod) => mod.FilterComponent),
  },
];
