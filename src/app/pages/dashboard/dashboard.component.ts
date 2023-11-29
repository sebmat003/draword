import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ITab } from 'src/app/models/tab.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  public tabs: ITab[] = [
    {
      label: 'Quick Play',
      bottom: false,
      url: '/dashboard/quick-play',
      icon: 'fas fa-play',
    },
    {
      label: 'Rooms',
      bottom: false,
      url: '/dashboard/rooms',
      icon: 'fas fa-user-friends',
    },
    {
      label: 'Create Room',
      bottom: false,
      url: '/dashboard/create-room',
      icon: 'fas fa-door-open',
    },
    {
      label: 'Rules',
      bottom: true,
      url: '/dashboard/rules',
      icon: 'fas fa-question-circle',
    },
  ];
}
