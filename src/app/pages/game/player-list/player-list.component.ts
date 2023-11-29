import { IGame } from '../../../models/game.model';
import { IRoom } from '../../../models/room.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerListComponent {
  @Input() public room!: IRoom;
  @Input() public game!: IGame;
}
