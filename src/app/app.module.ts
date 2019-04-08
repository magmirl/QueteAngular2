import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HightlightDirective } from './hightlight.directive';
import { MoviesListDirective } from './movies-list.directive';
import { DisplayGuestsDirective } from './display-guests.directive';

@NgModule({
  declarations: [
    AppComponent,
    HightlightDirective,
    MoviesListDirective,
    DisplayGuestsDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }