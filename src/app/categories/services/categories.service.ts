import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/categiry';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient : HttpClient) // to import httpclient
  { }


  getAllCategores() : Observable <any>  {//observable is a return value
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories');
  }

}
