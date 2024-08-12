import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { AppliedJobsListComponent } from './components/applied-jobs-list/applied-jobs-list.component';
import { AvaliableJobsListComponent } from './components/avaliable-jobs-list/avaliable-jobs-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { AddJobComponent } from './components/add-job/add-job.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'jobs', component: AvaliableJobsListComponent },
  { path: 'jobs/:id', component: JobDetailsComponent },
  { path: 'users/:id/jobs', component: AppliedJobsListComponent},
  { path: 'add', component: AddJobComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
