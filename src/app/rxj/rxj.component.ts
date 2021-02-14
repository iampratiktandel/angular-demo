import { Component, OnInit } from '@angular/core';
import { RxjService } from './rxj.service';

@Component({
  selector: 'app-rxj',
  templateUrl: './rxj.component.html',
  styleUrls: ['./rxj.component.css']
})
export class RxjComponent implements OnInit {

  user: string;
  constructor(private rxjService: RxjService) { }

  ngOnInit() {
    this.rxjService.currentUser.subscribe(
      user => this.user = user
    )
  }
}
