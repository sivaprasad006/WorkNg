import { Injectable } from '@angular/core';
import { Appconstants } from '../globalsConstants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(public http: HttpClient, public appconstants: Appconstants ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  GetallProjects(projectIds, isadmin)  {
    const body = JSON.stringify(projectIds);
    return this.http.post(this.appconstants.apiURL + 'Project/' + '?id=' + isadmin, body, this.httpOptions);
  }
}
