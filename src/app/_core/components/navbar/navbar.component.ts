import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { INavbarData } from 'src/app/models/navbar.model';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [NgClass, NgIf, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() public data!: INavbarData;
}
