import { Component , OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoriesService } from '../../../categories/services/categories.service';
import { products } from '../../interfaces/products';
import { Category } from '../../../categories/interfaces/categiry';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from '../../../shared/components/spiner/spiner.component';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { UsercartService } from '../../../cart/services/usercart.service';
import { WishService } from '../../../wishlist/services/wish.service';
import { ProductdetailsService } from '../../services/productdetails.service';
import { Router, RouterModule } from '@angular/router';
import { AllSubcategoryComponent } from '../../../sub-category/components/all-subcategory/all-subcategory.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, SliderComponent, AllSubcategoryComponent,FooterComponent],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products : products[] = [] ;
  categories : any[] = [];
  selectedCategory : string = '' ;
  



  constructor(private _ProductService : ProductService ,
              private _CategoriesService : CategoriesService
             
  )
  {
   
   }
   ngOnInit(): void {
      this.getProducts();
      this.getCategories();
   }
 
  getProducts(){
    this._ProductService.getAllProducts().subscribe((res : any) => {
        // console.log(res);
        this.products = res.data;
        // console.log(this.products)
    })
  }
  getCategories(){
    this._CategoriesService.getAllCategores().subscribe((res : any) => {
      this.categories = res.data ;
    });
    
  }
  filterByCategory() {
    if(this.selectedCategory) {
      this._ProductService.getProductsByCategory(this.selectedCategory).subscribe((res : any) => {
        this.products = res.data ;

      });
    }
    else {
      this.getProducts();
    }
    }  

    }
  



