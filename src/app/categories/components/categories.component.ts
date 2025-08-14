import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../interfaces/categiry';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

    categories: Category[] = [];
    
  constructor(private _CategoriesService: CategoriesService) {
    this.getCategories();
  }
    getCategories(){
      this._CategoriesService.getAllCategores().subscribe((res : any ) => {
        console.log(res);
         this.categories = res.data;
         console.log(this.categories);
      })
    }
  
}
