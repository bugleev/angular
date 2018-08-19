import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { BlankRecipeComponent } from './recipes/recipe-list/blank-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: BlankRecipeComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  { path: 'shoppinglist', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
