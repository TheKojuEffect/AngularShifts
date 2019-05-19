import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerListComponent } from './employer/employer-list/employer-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/employers', pathMatch: 'full'},
  {path: 'employers', component: EmployerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
