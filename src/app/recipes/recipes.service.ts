import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Borsh',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Borscz_041.jpg/440px-Borscz_041.jpg',
      ingredients: ['French fries', 'Pork meat', 'Salt']
    },
    {
      id: 'r2',
      title: 'Cesar salat',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/CaesarSalad3.jpg',
      ingredients: ['Onion', 'Chees', 'Bread']
    }
  ];

  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(repiceId: string): Recipe {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === repiceId;
      })
    };
  }
}
