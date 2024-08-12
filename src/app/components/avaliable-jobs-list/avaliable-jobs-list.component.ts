import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { StorageService } from '../../_services/storage.service';

@Component({
  selector: 'app-avaliable-jobs-list',
  templateUrl: './avaliable-jobs-list.component.html',
  styleUrl: './avaliable-jobs-list.component.css'
})
export class AvaliableJobsListComponent implements OnInit {

  jobs?: Job[];
  currentJob: Job = {};
  currentIndex = -1;
  title = '';
  
  currentUser?: any;
  id?: any;

  constructor(
    private jobService: JobService, 
    private storageService: StorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.id = this.currentUser.id;
    this.retrieveAvaliableJobs(this.id);
  }

  retrieveAllJobs(): void {
    this.jobService.getAll()
      .subscribe({
        next: (data) => {
          this.jobs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  retrieveAvaliableJobs(userId: number): void {
    this.jobService.getJobsAvaliable(userId)
      .subscribe({
        next: (data) => {
          this.jobs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveAllJobs();
    this.currentJob = {};
    this.currentIndex = -1;
  }

  setActiveJob(job: Job, index: number): void {
    this.currentJob = job;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentJob = {};
    this.currentIndex = -1;

    this.jobService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.jobs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}