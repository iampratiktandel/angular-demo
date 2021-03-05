import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User = {
    name: 'Pratik',
    age: 22,
    address: '221B Baker Street'
  }

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.overlayConfig
  }

  public openUserOverlay(userBtnRef: HTMLButtonElement, user: User) {
    this._userService.openUserOverlay(userBtnRef, user);
  }

}
