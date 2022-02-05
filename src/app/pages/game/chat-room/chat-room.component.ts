import { IGame } from './../../../models/game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit {
  @Input() public game!: IGame;
  constructor() {}

  ngOnInit(): void {}
}
