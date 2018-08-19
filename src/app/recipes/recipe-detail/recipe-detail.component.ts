import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  constructor(private shoppingService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.recipeId);
    });
  }

  addToShoppingList() {
    this.shoppingService.getFromRecipe(this.recipe.ingredients);
  }
}
