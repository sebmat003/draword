import { IGame } from './../../../models/game.model';
import { IRoom } from './../../../models/room.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  @Input() public room!: IRoom;
  @Input() public game!: IGame;
  constructor() {}

  ngOnInit(): void {}
}
