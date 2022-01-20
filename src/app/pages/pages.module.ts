import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../_core/_core.module';
import { PlayerInfoModalComponent } from './modals/player-info-modal/player-info-modal.component';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
  declarations: [PlayerInfoModalComponent],
  imports: [CommonModule, PagesRoutingModule, CoreModule],
  exports: [],
  providers: [],
})
export class PagesModule {}
