import { Component, OnInit } from '@angular/core';
import { NameService } from '../provider-service/name.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  message: string;
  constructor(private nameService: NameService) { }

  ngOnInit(): void {
    this.message = this.nameService.callService('Comp-One');
  }

}
