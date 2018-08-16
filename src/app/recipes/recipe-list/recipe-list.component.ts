import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a test desc', 'https://images-gmi-pmc.edge-generalmills.com/427211b0-6455-4c30-a29e-29997a2dca6a.jpg'
    )

  ];
  constructor() { }

  ngOnInit() {
  }

}
