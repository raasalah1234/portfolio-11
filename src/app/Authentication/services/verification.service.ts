import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private _HttpClient : HttpClient) { }

  verification(code : string) : Observable <any> {

    const body = JSON.stringify({resetCode : code.toString() });
    const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', body ,{headers});

  }

}
