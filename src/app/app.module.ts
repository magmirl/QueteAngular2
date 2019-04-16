import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ROUTES } from './app.routes';

//import { HightlightDirective } from './hightlight.directive';
//import { MoviesListDirective } from './movies-list.directive';
//import { DisplayGuestsDirective } from './display-guests.directive';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    SignUpComponent,
    UserProfileComponent,
    //HightlightDirective,
    //MoviesListDirective,
    //DisplayGuestsDirective,

 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot (ROUTES)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

