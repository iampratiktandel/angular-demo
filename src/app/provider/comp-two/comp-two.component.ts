import { Component, OnInit } from '@angular/core';
import { DateService } from '../provider-service/date.service';
import { NameService } from '../provider-service/name.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

  message: string;
  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.message = this.dateService.callService('Comp-Two')
  }

}
