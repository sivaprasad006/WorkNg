import { Component, OnInit, Input } from '@angular/core';
import { Appconstants } from '../globalsConstants';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // username: '';
  // password: '';
  userdata: any = [];
  usermodel = new User();

  constructor(public router: Router, public Userservice: UserserviceService, private toastr: ToastrService) { }

  // role = this.appconstants.role;
  ngOnInit() { }

  login() {
    return this.Userservice.getUserinfo(this.usermodel).subscribe((data: {}) => {
      this.userdata = data;
      if (this.userdata && this.userdata.User_ID > 0) {
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error('Please Enter Valid Credentials');
      }
    });
  }
}
