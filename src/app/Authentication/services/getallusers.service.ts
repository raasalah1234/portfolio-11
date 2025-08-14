import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetallusersService {

  constructor(private _HttpClient : HttpClient) { }

  getAllUsers() : Observable <any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/users');
  }
}
