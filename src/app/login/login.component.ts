import { Component, OnInit, Input } from '@angular/core';
import { appconstants } from '../globalsConstants';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public appconstants: appconstants,public router:Router, public Userservice:UserserviceService) { }
  
  // role = this.appconstants.role;
  ngOnInit() {  }
  username : '';
  password : '';
  userdata:any = [];

  login(){     
    this.username;
    this.password;
     return this.Userservice.getUserinfo(this.username,this.password).subscribe((data: {}) => { 
       this.userdata = data;          
    if(this.userdata && this.userdata.User_ID > 0){
      this.router.navigate(['/header']);
    }               
    })     
  }

}
