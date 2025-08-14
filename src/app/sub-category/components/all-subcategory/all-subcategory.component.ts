import { Component } from '@angular/core';
import { AllSubcategoryService } from '../../services/all-subcategory.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-subcategory',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './all-subcategory.component.html',
  styleUrl: './all-subcategory.component.scss'
})
export class AllSubcategoryComponent {

  showAll: boolean = false;

  allsub : any[] = [];
  constructor(private _allsub : AllSubcategoryService ){
    this.getAllSub();
  }

  getAllSub(){
    this._allsub.getAllSub().subscribe({
      next : (res)=>{
        console.log("success",res);
        this.allsub = res.data ;
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }


get visibleSubcategories() {
  return this.showAll ? this.allsub : this.allsub.slice(0, 5);
}

showMore() {
  this.showAll = !this.showAll;
}

}
