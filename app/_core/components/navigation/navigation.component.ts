import { Component, Input, OnInit } from '@angular/core';
import { Tab } from 'ClientApp/app/models/tab.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() tabs: Tab[];

  constructor() { }
  ngOnInit(): void {}
}
