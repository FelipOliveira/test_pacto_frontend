import { Component, Input, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../models/job.model'; 
import { StorageService } from '../../_services/storage.service';
import { User } from '../../models/type.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentJob: Job = {
    title: '',
    description: ''
  };

  @Input() applied = true;

  currentUser: User = this.storageService.getUser();
  message = '';
  admin = this.storageService.isAdmin();

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getJob(this.route.snapshot.params["id"]);
    }
  }

  getJob(id: string): void {
    this.jobService.get(id)
      .subscribe({
        next: (data) => {
          this.currentJob = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  apply(): void{
    this.jobService.applyToAJob(this.currentUser.id ,this.currentJob.id)
      .subscribe({
        next: (data) => {
          this.currentJob = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  decline(): void {
    this.jobService.declineAJob(this.currentUser.id ,this.currentJob.id)
      .subscribe({
        next: (data) => {
          this.currentJob = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateJob(): void {
    this.message = '';

    this.jobService.update(this.currentJob.id, this.currentJob)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/jobs']);
        },
        error: (e) => console.error(e)
      });
  }

  deleteJob(): void {
    this.jobService.delete(this.currentJob.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/jobs']);
        },
        error: (e) => console.error(e)
      });
  }
}
