import { IGame } from '../../../models/game.model';
import { IRoom } from '../../../models/room.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { DisplayCharacterComponent } from '../../../_core/components/display-character/display-character.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  standalone: true,
  imports: [NgForOf, DisplayCharacterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerListComponent {
  @Input() public room!: IRoom;
  @Input() public game!: IGame;
}
