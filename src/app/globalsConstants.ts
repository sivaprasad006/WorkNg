import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Appconstants {
  role  = 'test';
  UserInfoDetails = null;
  apiURL = 'http://localhost:59381/api/';
  LoginFrom = '';
  ProjectDetails: any = [];
}
