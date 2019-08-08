import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from  './header/header.component';

const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:"full"},
  { path:'login',component:LoginComponent,},
  //{ path:'**',redirectTo:'login',pathMatch:"full"},
  { path:'header',component:HeaderComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
