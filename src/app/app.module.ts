import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';

import { SidebarComponent } from './components/admin/sidebar/sidebar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DasboardComponent } from './components/admin/dasboard/dasboard.component';

import { AuthService } from './services/auth.service';
import { FeatureModule } from './feature/feature.module';
import { ApplicantComponent } from './applicant/applicant.component';
import { ConsumerDetailsComponent } from './applicant/consumer-details/consumer-details.component';
import { WaterConnectionComponent } from './applicant/water-connection/water-connection.component';
import { FileUploadsComponent } from './applicant/file-uploads/file-uploads.component';
import { PreviewComponent } from './applicant/preview/preview.component';
import { CompleteComponent } from './applicant/complete/complete.component';
import { TopnavComponent } from './components/admin/topnav/topnav.component';
import { WaterConsumerListComponent } from './components/admin/water-consumer-list/water-consumer-list.component';
import { MeterReadingComponent } from './components/admin/meter-reading/meter-reading.component';
import { WorkflowUsersComponent } from './components/admin/workflow-users/workflow-users.component';

import { CreateUsersComponent } from './components/admin/workflow-users/create-users/create-users.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
   
    ContactComponent,
        FooterComponent,
        DashboardComponent,
        LoginComponent,
        SignupComponent,
        AdminComponent,
    
        SidebarComponent,
     
        DasboardComponent,
        ApplicantComponent,
        ConsumerDetailsComponent,
        WaterConnectionComponent,
        FileUploadsComponent,
        PreviewComponent,
        CompleteComponent,
        TopnavComponent,
        WaterConsumerListComponent,
        MeterReadingComponent,
        WorkflowUsersComponent,
   
        CreateUsersComponent
   
       
   
      
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FeatureModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
