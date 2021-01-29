import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'ClientApp/app/models/game.model';
import { Player } from 'ClientApp/app/models/player.model';
import { Room } from 'ClientApp/app/models/room.model';
import { GameService } from 'ClientApp/app/_core/services/game.service';
import { RoomsService } from 'ClientApp/app/_core/services/rooms.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  id: number;
  room: Room;
  game: Game;
  userMessage: Message;
  currentWord: string;
  constructor(private router: Router, private roomsService: RoomsService, private gameService: GameService) { }

  ngOnInit() {
    this.id = parseInt(this.router.url.split('/').pop(), 10);
    this.room = this.roomsService.getRoomById(this.id);
    this.game = this.gameService.getGameById(this.id);
    this.game.players = this.game.players.sort((p1: Player, p2: Player) => p2.currentPoints - p1.currentPoints);
    this.currentWord = this.game.guessedWordProgress + "_".repeat(this.game.currentWord.length - this.game.guessedWordProgress.length);
  }

}
