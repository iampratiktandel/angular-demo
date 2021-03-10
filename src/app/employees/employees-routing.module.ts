import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
// import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  { 
    path: '', 
    component: EmployeesComponent
  },
  {
    path: 'add',
    component: AddEmployeeComponent
  },
  {
    path: 'edit/:id',
    component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
