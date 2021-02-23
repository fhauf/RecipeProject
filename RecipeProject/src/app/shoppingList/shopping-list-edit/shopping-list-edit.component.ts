import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('recipeNameInput', {static: false}) recipeNameInputRef: ElementRef;
  @ViewChild('recipeAmountInput', {static: false}) recipeAmountInputRef: ElementRef;
  @ViewChild('recipeUOMInput', {static: false}) recipeUOMInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

 onAddItem() {
    const ingredientName = this.recipeNameInputRef.nativeElement.value;
    const ingredientAmount = this.recipeAmountInputRef.nativeElement.value
    const ingredientUOM = this.recipeUOMInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingredientName, ingredientAmount, ingredientUOM);

    this.shoppingListService.addIngredient(newIngredient);
 }

 /*setTwoNumberDecimal(amtValue: string) {
  return parseFloat(amtValue).toFixed(2);
 }
 */

}
