import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGame } from 'src/app/models/game.model';
import { IPlayer } from 'src/app/models/player.model';
import { IRoom } from 'src/app/models/room.model';
import { GameService } from 'src/app/_core/services/game.service';
import { RoomsService } from 'src/app/_core/services/rooms.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit {
  public id!: number;
  public room!: IRoom;
  public game!: IGame;
  public currentWord!: string;
  constructor(
    private router: Router,
    private roomsService: RoomsService,
    private gameService: GameService,
  ) {}

  public ngOnInit(): void {
    this.initializeSettings();
  }

  private initializeSettings(): void {
    const url = this.router.url.split('/').pop();
    if (url) {
      this.id = parseInt(url, 10);
    }
    this.room = this.roomsService.getRoomById(this.id);
    this.game = this.gameService.getGameById(this.id);
    this.game.players = this.game.players.sort(
      (p1: IPlayer, p2: IPlayer) =>
        (p2.currentPoints || 0) - (p1.currentPoints || 0),
    );
    this.currentWord =
      this.game.guessedWordProgress +
      '_'.repeat(
        this.game.currentWord.length - this.game.guessedWordProgress.length,
      );
  }
}
