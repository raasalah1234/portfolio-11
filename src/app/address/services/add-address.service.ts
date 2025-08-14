import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAddressService {

  constructor(private _HttpClient : HttpClient) { }

  addAddress(home : any , homeDetails : any , phone : any , city : any) : Observable <any>{
    const token = localStorage.getItem("userToken");

    const headers = new HttpHeaders({
      token : token || ''
    });

    const body = { name : home , details: homeDetails , phone: phone , city: city  };

    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/addresses',body,{headers});

  }


deleteAddress(id : any) :Observable <any>{
  const token = localStorage.getItem("userToken");

    const headers = new HttpHeaders({
      token : token || ''
    });

    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/addresses/${id}`,{headers})

}
getAllAddress() :Observable <any>{
  const token = localStorage.getItem("userToken");

    const headers = new HttpHeaders({
      token : token || ''
    });

    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/addresses',{headers})

}
}
