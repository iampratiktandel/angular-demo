import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { delay, switchAll, switchMap } from 'rxjs/operators';
import { OperatorService } from '../services/operator.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(private operatorService: OperatorService) { }

  getData(data: string) {
    return of('Hey ' + data).pipe(delay(2000));
  }

  ngOnInit(): void {
    const source = from(['Pratik', 'Kunal', 'Meet']);

    /* map + SwitchAll() */
    // source.pipe(
    //   map(res => this.getData(res)),
    //   switchAll()
    // )
    // .subscribe(
    //   (res: any) => {
    //     return this.operatorService.print(res, 'switchContainer');
    //   }
    // )

    /* concatMap() */
    source.pipe(
      switchMap(res => this.getData(res)),
    )
    .subscribe(
      (res: any) => {
        return this.operatorService.print(res, 'switchContainer');
      }
    )
  }

}
