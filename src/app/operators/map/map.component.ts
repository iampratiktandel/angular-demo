import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from 'src/app/shared/employee.model';
import { OperatorService } from '../services/operator.service';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs';
import { delay, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // public employeeData$: Observable<Employee[]>;
  empSubscription: Subscription;
  
  constructor(private operatorService: OperatorService) { }

  getData(data: string) {
    return of('Hey ' + data).pipe(delay(2000));
  }

  ngOnInit(): void {

    this.empSubscription = this.operatorService.getDataWithMap()
    .subscribe((res) => {
      console.log('This data is fetched using Observables', res);
    });
    
    setTimeout(() => {
      this.empSubscription.unsubscribe();
    }, 10000)

    const source = from(['Pratik', 'Kunal', 'Meet']);

    /* map + mergeAll */
    // source.pipe(
    //   map(res => this.getData(res)),
    //   mergeAll()
    // )
    // .subscribe(
    //   (res: any) => {
    //     return this.operatorService.print(res, 'mapContainer');
    //   }
    // )

    /* mergeMap */
    source.pipe(
      mergeMap(res => this.getData(res))
    )
    .subscribe(
      (res: any) => {
        return this.operatorService.print(res, 'mapContainer');
      }
    )
  }
}
