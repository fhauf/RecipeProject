import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {

    private myRecipes: Recipe[] = [
        new Recipe(
                'Tasty Schnitzel', 
                'A super tasty Schnitzel - just awesome!', 
                'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
                [
                    new Ingredient('Beef', 1, 'Item'),
                    new Ingredient('French Fries', 20, 'Item')
                ]),
        new Recipe(
                'Big Fat Burger', 
                'What else do you need to say?', 
                'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
                [
                    new Ingredient('Hamburger', 1, 'Item'),
                    new Ingredient('Bun', 1, 'Item'),
                    new Ingredient('Onion', 0.5, 'Tsp')
                ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.myRecipes.slice();  // this will return a copy of the myRecipes array defined in this class
    }

    getRecipe(arrayIndex: number) {
        return this.myRecipes[arrayIndex];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}