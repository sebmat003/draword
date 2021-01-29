import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoreModule } from "ClientApp/app/_core/_core.module";
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from "./login.routing";

@NgModule({
   declarations: [LoginComponent],
   imports: [
      CommonModule,
      CoreModule,
      LoginRoutingModule,
      RouterModule,
   ],
   providers: []
 })
 export class LoginModule { }