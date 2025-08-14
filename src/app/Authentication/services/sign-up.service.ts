import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _HttpClient : HttpClient) { }

  signUp(userData: any) : Observable <any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData);
  }
    



}
