import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { INavbarData } from 'src/app/models/navbar.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, OnDestroy {
  public navbarData!: INavbarData;
  public subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data: any) => {
      this.navbarData = {
        ...data,
      };
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
