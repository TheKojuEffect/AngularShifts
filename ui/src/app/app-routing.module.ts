import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { employerRoutes } from './employer/employer.route';

const routes: Routes = [
  {path: '', redirectTo: '/employers', pathMatch: 'full'},
  ...employerRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
