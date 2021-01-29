import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "../_core/_core.module";
import { PagesRoutingModule } from "./pages.routing";
import { PlayerInfoModalComponent } from './modals/player-info-modal/player-info-modal.component';

@NgModule({
   declarations: [PlayerInfoModalComponent],
   imports: [
      CommonModule,
      PagesRoutingModule,
      CoreModule,
   ],
   exports: [],
   providers: []
 })
 export class PagesModule { }