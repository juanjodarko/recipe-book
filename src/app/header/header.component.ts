import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  @Output() optionSelected = new EventEmitter<number>();
  
  onRecipesSelected(){
    this.optionSelected.emit(0);
  }
  
  onShoppingListSelected(){
    this.optionSelected.emit(1);
  }
}