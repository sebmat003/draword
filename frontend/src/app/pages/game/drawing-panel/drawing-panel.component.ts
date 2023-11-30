import { IGame, IMessage } from '../../../models/game.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameInfoComponent } from '../game-info/game-info.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drawing-panel',
  templateUrl: './drawing-panel.component.html',
  styleUrls: ['./drawing-panel.component.scss'],
  standalone: true,
  imports: [GameInfoComponent, CanvasComponent, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawingPanelComponent {
  @Input() public currentWord!: string;
  @Input() public game!: IGame;
  public userMessage!: IMessage;
}
