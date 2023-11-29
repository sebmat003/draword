import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITab } from 'src/app/models/tab.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() public tabs: ITab[] = [];
}
