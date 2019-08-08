import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public http:HttpClient) { }
  apiURL = "http://localhost:59381/api/";

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getUserinfo(uname,pwd)  {
    return this.http.get(this.apiURL +"User/"+ uname + "/" + pwd)
  }
}
