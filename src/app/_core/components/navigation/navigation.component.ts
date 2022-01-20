import { Component, Input, OnInit } from '@angular/core';
import { ITab } from 'src/app/models/tab.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() public tabs: ITab[] = [];

  constructor() {}
  public ngOnInit(): void {}
}
