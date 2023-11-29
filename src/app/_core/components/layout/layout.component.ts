import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Data, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { INavbarData } from 'src/app/models/navbar.model';
import { takeUntil } from 'rxjs/operators';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, NavbarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, OnDestroy {
  public navbarData!: INavbarData;
  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data: Data) => {
      this.navbarData = data as INavbarData;
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }
}
