import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPlayer } from '../../../models/player.model';

@Component({
  selector: 'app-player-info-modal',
  templateUrl: './player-info-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerInfoModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IPlayer) {}
}
