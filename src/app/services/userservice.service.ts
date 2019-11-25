import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Appconstants } from '../globalsConstants';

// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public http: HttpClient, public appconstants: Appconstants ) { }

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getUserinfo(User)  {
    return this.http.get(this.appconstants.apiURL + 'User/' + User.username + '/' + User.password);
  }
}
