import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger-service/logger.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

  message: string;
  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.message = this.loggerService.printName('Comp-Two');
  }

}
