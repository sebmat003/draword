import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/_core/_core.module';
import { DrawingPanelComponent } from './drawing-panel/drawing-panel.component';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game.routing';
import { PlayerListComponent } from './player-list/player-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { CanvasComponent } from './drawing-panel/components/canvas/canvas.component';
import { CanvasOptionsComponent } from './drawing-panel/components/canvas-options/canvas-options.component';

const COMPONENTS = [
  GameComponent,
  DrawingPanelComponent,
  CanvasComponent,
  PlayerListComponent,
  ChatRoomComponent,
  GameInfoComponent,
];
const MODULES = [CommonModule, CoreModule, GameRoutingModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES, CanvasOptionsComponent],
})
export class GameModule {}
