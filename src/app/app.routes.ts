import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/product-list/product-list').then((module) => module.ProductList),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./components/product-detail/product-detail').then((module) => module.ProductDetail),
  },
];
