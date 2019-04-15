import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raclette party'/*Magalie*/;

  isThisIngredientVital:boolean = true;

  displayGuestList:boolean = true;
  showMovies:boolean=false;

  public model = new Model(); 

  songList:string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
  
  onSubmit() {
    // form submitted
    console.log('form submitted');
  }

  
}
