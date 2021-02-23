import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5, 'item'),
        new Ingredient('Tomatoes',10,'item'),
        new Ingredient('Oregano',0.5,'tsp')
      ];

      getIngredients() {
            return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        // This uses the Javascript ES6 spread operator to turn an array into a list so that the passed in array can be added to the ingredients array all in one shot
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

}