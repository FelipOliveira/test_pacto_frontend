import { Component } from '@angular/core';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {
  job: Job = {
    title: '',
    description: ''
  };

  submitted = false;

  constructor(private jobService: JobService){ }

  saveJob(): void {
    const data = {
      title: this.job.title,
      description: this.job.description
    };

    this.jobService.create(data)
      .subscribe({
        next: (res) =>{
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newJob(): void {
    this.submitted = false;
    this.job = {
      title: '',
      description: ''
    }
  }
}
