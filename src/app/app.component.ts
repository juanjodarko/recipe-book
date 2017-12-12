import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  showRecipes = true;
  showShoppingList = false;
  
  onOptionSelected(option:number){
    if(option === 0){
      this.showRecipes = true;
      this.showShoppingList = false;
    } else if(option === 1){
      this.showRecipes = false;
      this.showShoppingList = true;
    }
  }
}
