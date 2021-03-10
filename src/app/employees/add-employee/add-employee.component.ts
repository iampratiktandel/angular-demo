import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  canEdit: boolean = false;
  empId: string;

  public employeeModel: Employee = new Employee();
  @ViewChild('employeeForm') employeeForm: NgForm;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {
    const id = route.snapshot.paramMap.get('id');
    this.empId = id;
    if(id) {
      this.getEmployeeDetail(id);
      this.canEdit = true;
    }
   }

  ngOnInit(): void {
  }

  onAddEmployee(employeeForm: Employee) {
    if(!this.canEdit) {
      this.employeeModel = employeeForm;
      this.employeeService.addEmployee(employeeForm)
    } else {
      this.employeeService.editEmployee(employeeForm, this.empId)
    }
  }
  
  public getEmployeeDetail(id: string) {
    this.employeeService.getEmployeeById(id).subscribe(
      res => {
        res
        console.log(res);
        this.employeeForm.form.reset(res);
      } 
    );
  }
}
