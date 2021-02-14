import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class RxjService {

  constructor() { }

  private user = new BehaviorSubject<string>('pratik');
  currentUser = this.user.asObservable();

  changeUser(newUser: string) {
    this.user.next(newUser);
  }
}