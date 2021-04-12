import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5, 'item'),
        new Ingredient('Tomatoes',10,'item'),
        new Ingredient('Oregano',0.5,'tsp')
      ];

      getIngredients() {
            return this.ingredients.slice();
      }

      getIngredient(index: number) {
            return this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient) {
            this.ingredients.push(ingredient);
            this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        // This uses the Javascript ES6 spread operator to turn an array into a list so that the passed in array can be added to the ingredients array all in one shot
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      updateIngredient(index: number, updatedIngredient: Ingredient) {
            this.ingredients[index] = updatedIngredient;
            this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index: number) {
            this.ingredients.splice(index, 1);
            this.ingredientsChanged.next(this.ingredients.slice());
      }

}