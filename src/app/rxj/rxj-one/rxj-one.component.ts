import { Component, OnInit } from '@angular/core';
import { RxjService } from '../rxj.service';

@Component({
  selector: 'app-rxj-one',
  templateUrl: './rxj-one.component.html',
  styleUrls: ['./rxj-one.component.css']
})
export class RxjOneComponent implements OnInit {

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
