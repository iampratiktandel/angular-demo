import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule), pathMatch: 'full' },
  { path: 'intern', loadChildren: () => import('./intern/intern.module').then(m => m.InternModule) },
  { path: 'rxjs', loadChildren: () => import('./rxj/rxj.module').then(m => m.RxjModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }