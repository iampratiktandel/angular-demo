import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Employee } from 'src/app/shared/employee.model';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http: HttpClient) { }

  print(val: string, containerId: string) {
    let container = document.getElementById(containerId);
    let el = document.createElement('li');
    el.innerText = val;

    container.appendChild(el)
  }


  public getDataWithMap(): Observable<Employee[]>  {
    return this.http.get<Employee[]>('http://localhost:3000/employees')
  }
}
