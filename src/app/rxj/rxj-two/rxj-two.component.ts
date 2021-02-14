import { Component, OnInit } from '@angular/core';
import { RxjService } from '../rxj.service';

@Component({
  selector: 'app-rxj-two',
  templateUrl: './rxj-two.component.html',
  styleUrls: ['./rxj-two.component.css']
})
export class RxjTwoComponent implements OnInit {

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
