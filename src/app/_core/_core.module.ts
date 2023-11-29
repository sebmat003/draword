import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { DisplayCharacterComponent } from './components/display-character/display-character.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { NgxSliderModule } from 'ngx-slider-v2';

const COMPONENTS = [
  TableComponent,
  NavbarComponent,
  SidebarComponent,
  LayoutComponent,
  NavigationComponent,
  DisplayCharacterComponent,
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
  NgxSliderModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES, NgOptimizedImage],
  exports: [COMPONENTS, MODULES],
})
export class CoreModule {}
