import { IPlayer } from '../../../models/player.model';
import { PlayerInfoModalComponent } from '../../modals/player-info-modal/player-info-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../_core/services/auth.service';
import { PlayersService } from '../../../_core/services/players.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-players-online',
  templateUrl: './players-online.component.html',
  styleUrls: ['./players-online.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersOnlineComponent {
  public readonly displayedColumns = ['name', 'level', 'session_time'];
  public playersOnline = this.playersService.playersOnline;
  public players = this.playersService.players;
  public user = this.authService.user;

  constructor(
    private dialog: MatDialog,
    private playersService: PlayersService,
    private authService: AuthService,
  ) {}

  public openPlayerModal(player: IPlayer): void {
    this.dialog.open(PlayerInfoModalComponent, {
      data: player,
    });
  }
}
