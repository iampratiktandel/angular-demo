import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  //######## Get Data from JSON Server using Async Pipe ##########
  

  //######## Get Data from JSON Server using Promise ##########
  // public getEmployeesUsingPromise(): Promise<any> {
  //   let promise = new Promise((resolve, reject) => {
  //     this.http.get('http://localhost:3000/employees')
  //       .toPromise()
  //       .then(
  //         res =>  resolve(res),
  //         err =>  reject(err)
  //       );
  //   });
  //   return promise;
  // }



  //######## Get Data from JSON Server using Observables ##########
  // public getEmployeesusingObservables(): Observable<Employee[]>  {
  //   return this.http.get<Employee[]>('http://localhost:3000/employees')
  // }



  //######## Get Data from RegRes using Observables ##########
  // public getDemo(): Observable<any>  {
  //   return this.http.get('https://reqres.in/api/users?page=2')
  // }

  // public getDemoError(): Observable<any>  {
  //   return this.http.get('https://reqres.in/api/users/23')
  // }

  url: string = 'http://localhost:3000/employees';

  public getEmployees() {
    return this.http.get<Employee[]>('http://localhost:3000/employees')
  }
  
  public addEmployee(employeeForm: any) {
    this.http.post(`${this.url}`, employeeForm).subscribe(
      data => console.log('POST Request is successful ', data),
      error => console.log('Error', error)
    );
    this.router.navigate(['employees'])
  }

  public deleteEmployee(id: number) {
    this.http.delete(`${this.url}/${id}`).subscribe()
  }

  public getEmployeeById(id: string) {
    return this.http.get(`${this.url}/${id}`)
  }

  public editEmployee(employeeForm: any, id: string) {
    return this.http.put(`${this.url}/${id}`,employeeForm).subscribe(
      res => {
        res
        console.log(res);
        this.router.navigate(['employees'])
      } 
    );
  }
}
