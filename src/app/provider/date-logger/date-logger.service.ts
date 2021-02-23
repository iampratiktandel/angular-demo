import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class DateLoggerService {

  private static count: number = 0;
  constructor() {
    DateLoggerService.count += 1;
    console.log(`Instance created ${DateLoggerService.count} times`);
  }

  printName(name: string) {
    return `Date is ${name}`;
  }
}
