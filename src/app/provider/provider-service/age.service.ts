import { Injectable } from '@angular/core';

@Injectable()
export class AgeService {

  public count: number = 0;
  constructor() {
    this.count += 1;
    console.log(`Instance created ${this.count} times.`);
  }

  public callService(name: string) {
    return `Age is ${name}`;
  }
}
