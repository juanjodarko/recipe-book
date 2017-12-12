import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.campbellsoup.co.uk/img/recipes/33-campbells-cheese-vegetable-casserole-recipe.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.campbellsoup.co.uk/img/recipes/33-campbells-cheese-vegetable-casserole-recipe.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.campbellsoup.co.uk/img/recipes/33-campbells-cheese-vegetable-casserole-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
