import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllSubcategoryService {

constructor(private _HttpClient : HttpClient) { }

  getAllSub() : Observable <any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/subcategories');
  }

  getSubDetails(id : any) :Observable <any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`)
  }
}
