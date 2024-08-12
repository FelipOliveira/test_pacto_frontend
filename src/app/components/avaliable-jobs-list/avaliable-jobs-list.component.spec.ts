import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableJobsListComponent } from './avaliable-jobs-list.component';

describe('AvaliableJobsListComponent', () => {
  let component: AvaliableJobsListComponent;
  let fixture: ComponentFixture<AvaliableJobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvaliableJobsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaliableJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
