import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Appconstants {
  role  = 'test';
  UserInfoDetails = null;
  apiURL = 'http://qapractice-app:2121/api/';
  // 'http://localhost:59381/api/';
  LoginFrom = '';
  ProjectDetails: any = [];
}
