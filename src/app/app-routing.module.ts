import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './auth/admin.guard';
import {inject} from '@angular/core';
import { DasboardComponent } from './components/admin/dasboard/dasboard.component';
import { ApplicantComponent } from './applicant/applicant.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },
  {  
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdminComponent, children:[
    {path: 'dashboard', component: DasboardComponent},
  ]},

 


  {path : 'applicant' ,
    canActivate: [AdminGuard],
     component : ApplicantComponent
  },
  // {
  //   path: 'consumer',
  //   canActivate: [AdminGuard],
  //   component: ConsumerComponent,
  //   children: [
  //     // your consumer child routes here
  //   ]
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
