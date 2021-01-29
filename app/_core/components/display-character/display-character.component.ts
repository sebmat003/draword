import { Component, Input, OnInit } from '@angular/core';
import { CharacterSet } from 'ClientApp/app/models/player.model';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.scss']
})
export class DisplayCharacterComponent implements OnInit {
  @Input() characterSet: CharacterSet;
  @Input() width: string = '15rem';

  constructor() { }

  ngOnInit(): void {
  }

}
