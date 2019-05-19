import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employer } from './employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  private employersUrl = 'api/employers';

  constructor(
    private http: HttpClient
  ) {
  }

  getEmployers(): Observable<Employer[]> {
    return this.http.get<Employer[]>(this.employersUrl);
  }
}
