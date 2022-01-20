import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/_core/_core.module';
import { AddCategoryModalComponent } from './create-room/add-category-modal/add-category-modal.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { DeleteCategoryModalComponent } from './create-room/delete-category-modal/delete-category-modal.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { QuickPlayComponent } from './quick-play/quick-play.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    QuickPlayComponent,
    CreateRoomComponent,
    RoomsComponent,
    RulesComponent,
    DashboardComponent,
    AddCategoryModalComponent,
    DeleteCategoryModalComponent,
  ],
  imports: [CommonModule, CoreModule, DashboardRoutingModule, RouterModule],
  providers: [],
})
export class DashboardModule {}
