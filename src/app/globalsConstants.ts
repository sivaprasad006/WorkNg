import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Appconstants {
  role  = 'test';
  UserInfoDetails = null;
  apiURL =  'http://138.91.124.246:1037/api/';
  // 'http://qapractice-app:2121/api/';
  // 'http://localhost:59381/api/';

  LoginFrom = '';
  ProjectDetails: any = [];
}
