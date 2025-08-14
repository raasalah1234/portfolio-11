import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsercartService {

  constructor(private _HttpClient : HttpClient) { }


  getLoggedUserCart() : Observable<any> {
  const token = localStorage.getItem("userToken");
  console.log("🔑 Token from localStorage:", token); // للتأكد أنه موجود

  const headers = new HttpHeaders({
    token: token || ''  // استبدلي Authorization بـ token
  });

  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart', { headers });
}

addToCart(productId : any) : Observable<any> {
  const token = localStorage.getItem("userToken");

  const headers = new HttpHeaders({
    token : token || ''
  });

  const body = {productId : productId};

  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',body,{headers})

}

removeSpecificItem(productId : string) : Observable <any>{
  const token = localStorage.getItem("userToken");

  const headers = new HttpHeaders({
    token : token || ''
  });

  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers})

}

removeAllCart() : Observable <any>{
  const token = localStorage.getItem("userToken");

  const headers = new HttpHeaders({
    token : token || '' 
  });

  return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/cart',{headers})

}

updateQuantity(productId: string, count: number) {
  const token = localStorage.getItem("userToken");

  const headers = new HttpHeaders({
    token : token || ""
  })

  const body = {count : count}
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,body , { headers });
}
  



}


