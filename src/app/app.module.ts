import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { AddJobComponent } from './components/add-job/add-job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { AvaliableJobsListComponent } from './components/avaliable-jobs-list/avaliable-jobs-list.component';
import { AppliedJobsListComponent } from './components/applied-jobs-list/applied-jobs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    AddJobComponent,
    JobDetailsComponent,
    JobsListComponent,
    AvaliableJobsListComponent,
    AppliedJobsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
