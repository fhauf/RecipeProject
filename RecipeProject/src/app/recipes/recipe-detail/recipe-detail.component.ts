import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  curRecipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.curRecipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList() {
    
    this.recipeService.addIngredientsToShoppingList(this.curRecipe.ingredients);
    alert('Ingredients added to the Shopping List!');
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // could also navigate using the id
    //this.router.navigate(['../',this.id, 'edit'], {relativeTo: this.route});
  }

}
