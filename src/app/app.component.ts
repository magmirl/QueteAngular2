import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raclette party'/*Magalie*/;

  isThisIngredientVital:boolean = true;

  displayGuestList:boolean = true;
  showMovies:boolean=true;

  songList:string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

}
