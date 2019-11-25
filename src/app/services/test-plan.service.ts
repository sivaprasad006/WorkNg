import { Injectable } from '@angular/core';
import { Appconstants } from '../globalsConstants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestPlanService {

  constructor(public http: HttpClient, public appconstants: Appconstants) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  GetallTestPlans(prjid) {
    return this.http.get(this.appconstants.apiURL + 'Plan/' + prjid);
  }
}
