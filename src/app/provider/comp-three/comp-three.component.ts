import { Component, OnInit } from '@angular/core';
import { DateLoggerService } from '../date-logger/date-logger.service';
import { LoggerService } from '../logger-service/logger.service';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css']
})
export class CompThreeComponent implements OnInit {

  message: string;
  constructor(private loggerService: DateLoggerService) { }

  ngOnInit(): void {
    this.message = this.loggerService.printName('Comp-Three');
  }

}
