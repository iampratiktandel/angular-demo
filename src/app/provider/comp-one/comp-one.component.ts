import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger-service/logger.service';
import { NAME } from '../name';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  message: string;
  name: string;
  constructor(private loggerService: LoggerService, @Inject(NAME) name:string) {
  }

  ngOnInit(): void {
    this.message = this.loggerService.printName('Comp-One');
  }
  
}