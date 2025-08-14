import { Component } from '@angular/core';
import { GetspecificbrandService } from '../../services/getspecificbrand.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-getspecificbrand',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './getspecificbrand.component.html',
  styleUrl: './getspecificbrand.component.scss'
})
export class GetspecificbrandComponent {

  constructor(private _specificbrand : GetspecificbrandService,
              private router : ActivatedRoute
  ){}

  brands : any ;

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if(id){
      this.GetSpecificBrand(id);
    }
  }

  GetSpecificBrand(id : any){
    this._specificbrand.getSpecificBrand(id).subscribe({
      next : (res)=>{
        console.log("success",res);
        this.brands = res.data;
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }
}
