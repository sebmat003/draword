import { NgModule } from "@angular/core";
import { CanvasComponent } from "./components/canvas/canvas.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TableComponent } from "./components/table/table.component";
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule} from "@angular/material/checkbox";
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from "@angular/forms";
import { DisplayCharacterComponent } from './components/display-character/display-character.component';

const COMPONENTS = [
   CanvasComponent,
   TableComponent,
   NavbarComponent,
   SidebarComponent,
   LayoutComponent,
   NavigationComponent, 
   DisplayCharacterComponent
];

const MODULES = [
   CommonModule,
   RouterModule,
   MatDialogModule,
   MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   MatListModule,
   MatTableModule,
   MatSortModule,
   MatTooltipModule,
   MatRadioModule,
   MatCheckboxModule,
   MatSelectModule,
   MatSliderModule,    
   FormsModule
];

@NgModule({
   declarations: [...COMPONENTS, ],
   imports: [...MODULES],
   exports: [...COMPONENTS, ...MODULES],
   providers: []
 })
 export class CoreModule { }