import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private _HttpClient : HttpClient) { }

  getWish() : Observable <any>{
    const token = localStorage.getItem("userToken");

    const headers = new HttpHeaders({
      token : token || ''
    });

    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist' , {headers});
  }

  addToWish(productId : string) : Observable <any>{
    const token = localStorage.getItem("userToken");

    const headers = new HttpHeaders({
      token : token ||''
    });

    const body = {productId : productId};

    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',body,{headers})

  }

   deleteWishItem(productId :string) : Observable <any>{
   const token = localStorage.getItem("userToken");

   const headers = new HttpHeaders({
    token : token || ''
   });
   
   return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{headers})
 }
}
