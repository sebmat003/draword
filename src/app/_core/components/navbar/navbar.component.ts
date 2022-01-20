import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from 'src/app/models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() public data!: INavbarData;
  constructor() {}

  public ngOnInit(): void {}
}
