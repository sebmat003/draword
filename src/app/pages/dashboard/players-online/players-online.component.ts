import { IPlayer } from './../../../models/player.model';
import { PlayerInfoModalComponent } from './../../modals/player-info-modal/player-info-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './../../../_core/services/auth.service';
import { PlayersService } from './../../../_core/services/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-online',
  templateUrl: './players-online.component.html',
  styleUrls: ['./players-online.component.scss'],
})
export class PlayersOnlineComponent implements OnInit {
  public playersOnline = this._playersService.playersOnline;
  public players = this._playersService.players;
  public displayedColumns = ['name', 'level', 'session_time'];
  public user = this._authService.user;
  constructor(
    private _dialog: MatDialog,
    private _playersService: PlayersService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {}

  public openPlayerModal(player: IPlayer): void {
    this._dialog.open(PlayerInfoModalComponent, {
      data: player,
    });
  }
}
