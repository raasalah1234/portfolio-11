import { Component } from '@angular/core';
import { AllSubcategoryService } from '../../services/all-subcategory.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sub-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-details.component.html',
  styleUrl: './sub-details.component.scss'
})
export class SubDetailsComponent {

  sub : any;

  constructor(private _sub : AllSubcategoryService,
              private router : ActivatedRoute
  ){}

  ngOnInit(){
    const id = this.router.snapshot.paramMap.get('id');

    if(id){
      this.getSubDetails(id);
    }
  }

  getSubDetails(id : any){
    this._sub.getSubDetails(id).subscribe({
      next : (res)=>{
        console.log("success",res);
        this.sub = res.data;
        
      },
      error : (err)=>{
        console.log(err);
      }
    })

  }
}
