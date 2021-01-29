import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarData } from 'ClientApp/app/models/navbar.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  navbarData: NavbarData;
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.data.subscribe((data: NavbarData) => {
      this.navbarData = {
        ...data
      };
      console.log(this.navbarData)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
