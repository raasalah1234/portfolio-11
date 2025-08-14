import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateuserdataService {

  constructor(private _HttpClient : HttpClient) { }

  update(name : any , email : any , phone :any) : Observable <any> {
    const token = localStorage.getItem("userToken");

    const headers = new HttpHeaders({
      token : token || ''
    });

    const body = { name :  name , email : email ,phone : phone};
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/updateMe/',body,{headers});
  }
}
