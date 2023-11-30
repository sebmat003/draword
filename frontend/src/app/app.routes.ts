import { Routes } from '@angular/router';
import { LayoutComponent } from './_core/components/layout/layout.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'game',
    component: LayoutComponent,
    data: { curved: false, backButton: true },
    children: [
      { path: '', redirectTo: ':id', pathMatch: 'full' },
      {
        path: '',
        children: [
          {
            path: ':id',
            loadComponent: () =>
              import('./pages/game/game.component').then(
                (c) => c.GameComponent,
              ),
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    data: { curved: true, backButton: false },
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then(
        (r) => r.DASHBOARD_ROUTES,
      ),
  },
  { path: '**', redirectTo: 'login' },
];
