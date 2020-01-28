import { Injectable } from '@angular/core';
import { Appconstants } from '../globalsConstants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestPlanService {

  constructor(public http: HttpClient, public appconstants: Appconstants) { }

  GetallTestPlans(prjid) {
    const url = `${this.appconstants.apiURL}Plan/${prjid}`;
    const headers =  new HttpHeaders({
        'Content-Type': 'application/json'
      });
    return this.http.get(url, { headers});
  }
}
