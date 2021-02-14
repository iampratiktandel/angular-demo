import { Component, OnInit } from '@angular/core';
import { RxjService } from '../rxj.service';

@Component({
  selector: 'app-rxj-three',
  templateUrl: './rxj-three.component.html',
  styleUrls: ['./rxj-three.component.css']
})
export class RxjThreeComponent implements OnInit {

  constructor(private rxjService: RxjService) { }

  user: string;
  newUser: string;

  ngOnInit() {
    this.rxjService.currentUser.subscribe(
      user => this.user = user
    )
  }

  updateUser() {
    this.rxjService.changeUser(this.newUser)
  }
}
