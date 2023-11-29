import { IGame, IMessage } from '../../../models/game.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-drawing-panel',
  templateUrl: './drawing-panel.component.html',
  styleUrls: ['./drawing-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawingPanelComponent {
  @Input() public currentWord!: string;
  @Input() public game!: IGame;
  public userMessage!: IMessage;
}
