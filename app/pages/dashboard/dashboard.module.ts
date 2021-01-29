import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "ClientApp/app/_core/_core.module";
import { QuickPlayComponent } from './quick-play/quick-play.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RulesComponent } from './rules/rules.component';
import { DashboardRoutingModule } from "./dashboard.routing";
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from "@angular/router";
import { AddCategoryModalComponent } from './create-room/add-category-modal/add-category-modal.component';
import { DeleteCategoryModalComponent } from './create-room/delete-category-modal/delete-category-modal.component';

@NgModule({
   declarations: [QuickPlayComponent, CreateRoomComponent, RoomsComponent, RulesComponent, DashboardComponent, AddCategoryModalComponent, DeleteCategoryModalComponent],
   imports: [
      CommonModule,
      CoreModule,
      DashboardRoutingModule,
      RouterModule
   ],
   providers: [],
 })
 export class DashboardModule { }