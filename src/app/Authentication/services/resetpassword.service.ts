import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(private _HttpClient : HttpClient) { }

  resetPassword(data : any) : Observable <any>
  {

    
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data)

  }
}
