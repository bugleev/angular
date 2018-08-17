import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputContent: ElementRef;
  @ViewChild('amountInput') amountInputContent: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {

  }

  handleAddBtn() {
    const name = this.nameInputContent.nativeElement.value;
    const amount = this.amountInputContent.nativeElement.value || '0';
    this.shoppingService.addIngridient(new Ingredient(name, amount));
  }

}
