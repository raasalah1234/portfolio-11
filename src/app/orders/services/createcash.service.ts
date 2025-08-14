import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatecashService {

  constructor(private _HttpClient : HttpClient) { }

  
    createCashOrder(cartId: any , details : any , phone : any , city : any): Observable<any> {
      
        const  token =  localStorage.getItem("userToken");
        const  headers = new HttpHeaders({
          token : token || ''
        });
        const body = { shippingAddress :{
        details : details ,
        phone : phone ,
        city : city  
        }};
        return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,body ,{headers}); 
 
}

}

  
