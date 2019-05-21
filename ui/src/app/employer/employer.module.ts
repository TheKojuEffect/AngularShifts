import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { EmployerFormComponent } from './employer-form/employer-form.component';
import { EmployerDetailComponent } from './employer-detail/employer-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployerListComponent, EmployerFormComponent, EmployerDetailComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EmployerModule {
}
