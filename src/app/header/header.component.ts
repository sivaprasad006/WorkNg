import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appconstants } from '../globalsConstants';
import { ProjectService } from '../services/project.service';
import { TestPlanService } from '../services/test-plan.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  projectdata: any = [];
  projects: any = [];
  // tslint:disable-next-line:max-line-length
  constructor(public router: Router, public projectService: ProjectService, public testplanservice: TestPlanService, public appconstants: Appconstants) { }

  ngOnInit() {
    if (window.sessionStorage.UserInfoDetails != null) {
      this.getProjects();
    }
  }
  logout() {
    this.router.navigate(['/login']);
  }
  getProjects() {
    this.projectdata = JSON.parse(window.sessionStorage.UserInfoDetails);
    return this.projectService.GetallProjects(this.projectdata.ProjectIDs, this.projectdata.IsAdmin).subscribe((data: {}) => {
       this.projects = data;
       this.appconstants.ProjectDetails = data;
    });
  }
  GetallTestPlans() {
    return this.testplanservice.GetallTestPlans(this.projectdata.ProjectIDs);
  }
}
