import { Component, Input, OnInit } from '@angular/core';
import { NavbarData } from 'ClientApp/app/models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() data: NavbarData;
  constructor() { }

  ngOnInit() {
  }

}
