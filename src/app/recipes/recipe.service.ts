import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a test desc', 'https://images-gmi-pmc.edge-generalmills.com/427211b0-6455-4c30-a29e-29997a2dca6a.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('sauce', 100),
        new Ingredient('Cheese', 2)
      ]
    ),
    new Recipe(
      'A test recipe',
      'this is a test desc', 'https://images-gmi-pmc.edge-generalmills.com/427211b0-6455-4c30-a29e-29997a2dca6a.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('sauce', 200),
        new Ingredient('Cheese', 5)
      ]
    )

  ];
  getRecipes() {
    return this.recipes.slice();

  }


}
