import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDetails } from '../interfaces/ProductDetails';

import { ProductsDetailsComponent } from '../components/products-details/products-details.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
 
  constructor(private _HttpClient : HttpClient) { }

  getProductDetails(id: string) : Observable <any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    
 
}





}
