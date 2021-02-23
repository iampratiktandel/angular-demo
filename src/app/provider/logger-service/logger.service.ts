import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private static count: number = 0;
  constructor() {
    LoggerService.count += 1;
    console.log(`Instance created ${LoggerService.count} times`);
  }

  printName(name: string) {
    return `Name is ${name}`;
  }
}
