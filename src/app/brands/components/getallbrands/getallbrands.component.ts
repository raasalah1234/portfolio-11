import { Component } from '@angular/core';
import { GetallbrandsService } from '../../services/getallbrands.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-getallbrands',
  standalone: true,
  imports: [RouterModule, HeaderComponent,FooterComponent],
  templateUrl: './getallbrands.component.html',
  styleUrl: './getallbrands.component.scss'
})
export class GetallbrandsComponent {

  allBrands : any[] = [];

  constructor(private _getbrands : GetallbrandsService){
    this.getAllBrands();
  }

  getAllBrands(){
    this._getbrands.getAllBrands().subscribe({
      next : (res)=>{
        console.log("success",res);
        this.allBrands = res.data;
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }

}
