import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [EmployerListComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule
  ]
})
export class EmployerModule {
}
