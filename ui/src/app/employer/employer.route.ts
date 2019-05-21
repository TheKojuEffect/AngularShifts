import { Routes } from '@angular/router';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EmployerDetailComponent } from './employer-detail/employer-detail.component';
import { EmployerFormComponent } from './employer-form/employer-form.component';

export const employerRoutes: Routes = [
  {
    path: 'employers',
    component: EmployerListComponent
  },
  {
    path: 'employers/new',
    component: EmployerFormComponent
  },
  {
    path: 'employers/:id',
    component: EmployerDetailComponent
  },
  {
    path: 'employers/:id/edit',
    component: EmployerFormComponent
  }
];
