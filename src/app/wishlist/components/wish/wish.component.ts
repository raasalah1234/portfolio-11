import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WishService } from '../../services/wish.service';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.scss'
})
export class WishComponent {
 wishItems : any[] = [];
 constructor(private _wish : WishService){}

 ngOnInit(): void {
    this.getWish();
  }

 getWish(){
  this._wish.getWish().subscribe({
    next : (res)=>{
      console.log("success",res);
      this.wishItems = res.data ;
    },
    error : (err)=>{
      console.log(err);
    }
  })
 }

 deleteWishItem(id :any){
  this._wish.deleteWishItem(id).subscribe({
    next : (res) =>{
      console.log("success",res);
      this.getWish();
    },
    error : (err)=>{
      console.log(err);
    }
  })
 }

}
