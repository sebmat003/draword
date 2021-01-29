import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "ClientApp/app/_core/components/layout/layout.component";
import { QuickPlayComponent } from "./quick-play/quick-play.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { CreateRoomComponent } from "./create-room/create-room.component";
import { RulesComponent } from "./rules/rules.component";

const routes: Routes = [
    { path: '', redirectTo: 'quick-play', pathMatch: 'full' },
    {
        path: '',
        //canActivate: [AuthGuard],
        component: LayoutComponent, data: {curved: true, backButton: false},
        children: [
            { path: 'quick-play', component: QuickPlayComponent},
            { path: 'rooms', component: RoomsComponent},
            { path: 'create-room', component: CreateRoomComponent},
            { path: 'rules', component: RulesComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}