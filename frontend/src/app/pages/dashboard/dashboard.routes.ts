import { DashboardComponent } from './dashboard.component';
import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', redirectTo: 'quick-play', pathMatch: 'full' },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'quick-play',
        loadComponent: () =>
          import('./quick-play/quick-play.component').then(
            (c) => c.QuickPlayComponent,
          ),
      },
      {
        path: 'rooms',
        loadComponent: () =>
          import('./rooms/rooms.component').then((c) => c.RoomsComponent),
      },
      {
        path: 'create-room',
        loadComponent: () =>
          import('./create-room/create-room.component').then(
            (c) => c.CreateRoomComponent,
          ),
      },
      {
        path: 'rules',
        loadComponent: () =>
          import('./rules/rules.component').then((c) => c.RulesComponent),
      },
    ],
  },
];
