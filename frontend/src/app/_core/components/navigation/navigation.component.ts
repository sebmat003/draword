import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITab } from 'src/app/models/tab.model';
import { NgForOf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [NgForOf, RouterLinkActive, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() public tabs: ITab[] = [];
}
