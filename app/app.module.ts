import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './_core/_core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


const COMPONENTS = [
  AppComponent
];

const MODULES = [
  AppRoutingModule,
  PagesModule,
  CoreModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  FormsModule
];

const PIPES = [];
const DIRECTIVES = [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {width: '500px', hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
