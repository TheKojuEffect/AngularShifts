import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { Observable } from 'rxjs';
import { Employer } from '../employer';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.scss']
})
export class EmployerListComponent implements OnInit {

  employers$: Observable<Employer[]>;
  displayedColumns: string[] = ['name'];

  constructor(
    private employerService: EmployerService
  ) {
  }

  ngOnInit() {
    this.employers$ = this.employerService.getEmployers();
  }

}
