import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoreModule } from "ClientApp/app/_core/_core.module";
import { GameComponent } from "./game.component";
import { GameRoutingModule } from "./game.routing";
import { DrawingPanelComponent } from './drawing-panel/drawing-panel.component';

const COMPONENTS = [
   GameComponent
]

@NgModule({
   declarations: [COMPONENTS, DrawingPanelComponent],
   imports: [
      CommonModule,
      CoreModule,
      GameRoutingModule,
      RouterModule
   ],
   providers: []
 })
 export class GameModule { }