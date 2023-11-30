import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IPlayer } from '../../../models/player.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-player-info-modal',
  templateUrl: './player-info-modal.component.html',
  standalone: true,
  imports: [MatDialogModule, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerInfoModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IPlayer) {}
}
