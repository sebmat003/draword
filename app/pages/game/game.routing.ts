import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "ClientApp/app/_core/components/layout/layout.component";
import { DrawingPanelComponent } from "./drawing-panel/drawing-panel.component";

const routes: Routes = [
    { path: '', redirectTo: ':id', pathMatch: 'full' },
    {
        path: '',
        //canActivate: [AuthGuard],
        component: LayoutComponent, data: {curved: false, backButton: true},
        children: [
          { path: ':id', component: DrawingPanelComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameRoutingModule {

}