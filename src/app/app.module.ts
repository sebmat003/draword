import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './_core/_core.module';

const COMPONENTS = [AppComponent];

const MODULES = [
  AppRoutingModule,
  PagesModule,
  CoreModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  FormsModule,
];

const PIPES = [];
const DIRECTIVES = [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, NoopAnimationsModule],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { width: '500px', hasBackdrop: true },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
