import { Component, OnInit } from '@angular/core';
import { AgeService } from '../provider-service/age.service';
import { NameService } from '../provider-service/name.service';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css']
})
export class CompThreeComponent implements OnInit {

  message: string;
  constructor(private ageService: AgeService) { }

  ngOnInit(): void {
    this.message = this.ageService.callService('Comp-Three')
  }

}
