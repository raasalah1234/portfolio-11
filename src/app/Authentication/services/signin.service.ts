import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private _HttpCClient : HttpClient) { }

     SignIn (userData : any) : Observable <any> {
      return this._HttpCClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
  }


}
