import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeesComponent, AddEmployeeComponent, EditEmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule
  ],
  // exports: [EmployeesComponent, AddEmployeeComponent, EditEmployeeComponent]
})
export class EmployeesModule { }
