import { IGame } from '../../../models/game.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
  standalone: true,
  imports: [UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameInfoComponent {
  @Input() public currentWord!: string;
  @Input() public game!: IGame;
}
