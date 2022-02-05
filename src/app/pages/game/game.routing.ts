import { GameComponent } from './game.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/_core/components/layout/layout.component';
import { DrawingPanelComponent } from './drawing-panel/drawing-panel.component';

const routes: Routes = [
  { path: '', redirectTo: ':id', pathMatch: 'full' },
  {
    path: '',
    children: [{ path: ':id', component: GameComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
