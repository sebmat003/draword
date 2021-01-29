import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GameComponent } from "./game/game.component";

const routes: Routes = [
    { path: 'game', component: GameComponent, loadChildren: './game/game.module#GameModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        loadChildren: './dashboard/dashboard.module#DashboardModule'
     },
    { path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {

}