import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../shared/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

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
  public getEmployeesusingObservables(): Observable<Employee[]>  {
    return this.http.get<Employee[]>('http://localhost:3000/employees')
  }



  //######## Get Data from RegRes using Observables ##########
  public getDemo(): Observable<any>  {
    return this.http.get('https://reqres.in/api/users?page=2')
  }

  public getDemoError(): Observable<any>  {
    return this.http.get('https://reqres.in/api/users/23')
  }

}
