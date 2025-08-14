import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient : HttpClient) { }

  getAllProducts() : Observable <products[]>{
    return this._HttpClient.get <products[]>('https://ecommerce.routemisr.com/api/v1/products');
  }

  getProductsByCategory(categoryId: string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`);
}


}
