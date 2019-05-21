import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployerService } from '../employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html',
  styleUrls: ['./employer-form.component.scss']
})
export class EmployerFormComponent {

  isSaving = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private employerService: EmployerService) {
  }

  employerForm = this.fb.group({
      name: ['', Validators.required]
    }
  );

  saveEmployer() {
    this.isSaving = true;
    const employer = this.employerForm.value;
    this.employerService.save(employer)
      .subscribe(() => {
        this.isSaving = false;
        return this.router.navigate(['/employers']);
      });
  }
}
