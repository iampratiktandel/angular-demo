import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs/internal/observable/of';
import { concatAll, concatMap, delay, map, take } from 'rxjs/operators';
import { OperatorService } from '../services/operator.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private operatorService: OperatorService) { }

  getData(data: string) {
    return of('Hey ' + data).pipe(delay(2000));
  }

  ngOnInit(): void {

    const source = from(['Pratik', 'Kunal', 'Meet']);

    /* map + concatAll() */
    // source.pipe(
    //   map(res => this.getData(res)),
    //   concatAll()
    // )
    // .subscribe(
    //   (res: any) => {
    //     return this.operatorService.print(res, 'concatContainer');
    //   }
    // )

    /* concatMap() */
    source.pipe(
      concatMap(res => this.getData(res)),
    )
    .subscribe(
      (res: any) => {
        return this.operatorService.print(res, 'concatContainer');
      }
    )
  }

}
