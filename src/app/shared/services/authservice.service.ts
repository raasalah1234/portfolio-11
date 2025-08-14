import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isLogged : boolean = false ;

  constructor(private _HttpClint : HttpClient) { 
 if (typeof window !== 'undefined') {
      this.saveUserData();
    }  }

  saveUserData() : void {
    const token = localStorage.getItem("userToken");
    this.isLogged = !!token ;
  }

  logout() : void {
    localStorage.removeItem("userToken");
    this.isLogged = false ;
  }
  getUserName(): string {
  return localStorage.getItem('userName') || '';
}

  update(currentPassword : any , password : any , rePassword : any) : Observable <any> {
    const token = localStorage.getItem("userToken");

    const headers = new HttpHeaders({
      token : token || "" 
    });

    const body = { currentPassword : currentPassword, password : password, rePassword : rePassword};

    return this._HttpClint.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',body, {headers});
  }

}
