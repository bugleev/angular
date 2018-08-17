import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';



@Injectable({ providedIn: 'root' })
export class ShoppingListService {

  onChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngridients() {
    return this.ingredients.slice();

  }
  addIngridient(item: Ingredient) {
    this.ingredients.push(item);
    this.onChange.emit(this.ingredients.slice());
  }

  getFromRecipe(newIngredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(newIngredients);
    this.onChange.emit(this.ingredients.slice());
  }

}
