import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  // public employeeModel = new Employee();
  // public submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(employeeForm: any) {
  //   this.submitted = true;
  //   console.log(employeeForm.value);
  // }

  // get diagnostic() { return JSON.stringify(this.employeeModel); }
}
