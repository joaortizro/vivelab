
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  exports:[
    HttpModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
