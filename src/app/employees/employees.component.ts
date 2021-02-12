import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../shared/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  public employees!: Employee[];

  subscription!: Subscription;

  constructor(private employeeService: EmployeeService, private http: HttpClient) { }

  ngOnInit(): void {
    // this.employeeService.getEmployeesUsingPromise()
    //   .then((res) => {
    //     this.employees = res;
    //     console.log('This data is fetched using Promise', res);
    //   }) 
    //   .catch((err) => {
    //     console.log(err);
    //   });

    
    this.subscription = this.employeeService.getEmployeesusingObservables().subscribe((res) => {
      this.employees = res;
      console.log('This data is fetched using Observables', res);
    });


    this.employeeService.getDemo().subscribe((res) => {
      console.log('This data is fetched from RegRes', res);
    });

    this.employeeService.getDemoError().subscribe((res) => {
      console.log('No resource', res);
    });
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  public unsubscribeEmployees(): void {
    console.log('Unsubscribed the Observable');
    this.subscription.unsubscribe();
  }

}
