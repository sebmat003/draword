import { IGame } from './../../../models/game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent implements OnInit {
  @Input() public currentWord!: string;
  @Input() public game!: IGame;
  constructor() {}

  ngOnInit(): void {}
}
