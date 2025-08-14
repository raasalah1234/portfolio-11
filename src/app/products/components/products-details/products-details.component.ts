// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, RouterModule } from '@angular/router';
// import { ProductDetails } from '../../interfaces/ProductDetails';
// import { ProductdetailsService } from '../../services/productdetails.service';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { UsercartService } from '../../../cart/services/usercart.service';
// import { WishService } from '../../../wishlist/services/wish.service';
// import { HeaderComponent } from '../../../shared/components/header/header.component';
// import { FooterComponent } from '../../../shared/components/footer/footer.component';
// import { NgImageSliderModule } from 'ng-image-slider';


// @Component({
//   selector: 'app-products-details',
//   standalone: true,
//   imports: [CommonModule,RouterModule,HeaderComponent,FooterComponent,NgImageSliderModule],
//   templateUrl: './products-details.component.html',
//   styleUrls: ['./products-details.component.scss']
// })
// export class ProductsDetailsComponent  {

//     productDetails : any ;

//   constructor(private _details : ProductdetailsService,
//               private _router : ActivatedRoute,
//                private _UserCart : UsercartService,
//               private _wish : WishService,
//               private router : Router
//   ){}

  

//   ngOnInit() : void {
//     const id = this._router.snapshot.paramMap.get('id');
//     if(id) {
//       this.getDetails(id);
//     }
//   }

//       getDetails(id : any){
//       this._details.getProductDetails(id).subscribe({
//         next : (res)=>{
//           console.log("success",res);

//           this.productDetails =  res.data ;
//         },
//         error : (err)=>{
//           console.log(err);
//         }
//       })

//     }

    
//     addToCart(id:string) {
//       this._UserCart.addToCart(id).subscribe({
//         next : (res)=> {
//           console.log("success",res);

//           this.router.navigate(['/cart']);


//         },
//         error : (err)=>{
//           console.log("error",err);
//           alert("You are not logged in. Please login to get access");
//         }
//       });
//     }

//     addToWish(id :any){
//       this._wish.addToWish(id).subscribe({
//         next : (res)=>{
//           console.log("success",res);

//           this.router.navigate(['/wish']);
//         },
//         error : (err)=>{
//           console.log(err);
//         }
//       });

//     }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';

import { ProductdetailsService } from '../../services/productdetails.service';
import { UsercartService } from '../../../cart/services/usercart.service';
import { WishService } from '../../../wishlist/services/wish.service';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    NgImageSliderModule
  ],
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  productDetails: any;
  imageObject: Array<{ image: string, thumbImage: string }> = []; // ✅ الصور للسلايدر

  constructor(
    private _details: ProductdetailsService,
    private _router: ActivatedRoute,
    private _UserCart: UsercartService,
    private _wish: WishService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get('id');
    if (id) {
      this.getDetails(id);
    }
  }

  getDetails(id: any) {
    this._details.getProductDetails(id).subscribe({
      next: (res) => {
        console.log("success", res);
        this.productDetails = res.data;

        // ✅ تجهيز الصور للسلايدر
        this.imageObject = [
          { image: this.productDetails.imageCover, thumbImage: this.productDetails.imageCover },
          ...(this.productDetails.images || []).map((img: string) => ({
            image: img,
            thumbImage: img
          }))
        ];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addToCart(id: string) {
    this._UserCart.addToCart(id).subscribe({
      next: (res) => {
        console.log("success", res);
        this.router.navigate(['/cart']);
      },
      error: (err) => {
        console.log("error", err);
        alert("You are not logged in. Please login to get access");
      }
    });
  }

  addToWish(id: any) {
    this._wish.addToWish(id).subscribe({
      next: (res) => {
        console.log("success", res);
        this.router.navigate(['/wish']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

