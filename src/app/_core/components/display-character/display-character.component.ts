import { Component, Input, OnInit } from '@angular/core';
import { ICharacterSet } from 'src/app/models/player.model';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.scss'],
})
export class DisplayCharacterComponent implements OnInit {
  @Input() public characterSet!: ICharacterSet;
  @Input() public width = '15rem';

  constructor() {}

  public ngOnInit(): void {}
}
