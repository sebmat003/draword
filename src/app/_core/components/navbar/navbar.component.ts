import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { INavbarData } from 'src/app/models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() public data!: INavbarData;
}
