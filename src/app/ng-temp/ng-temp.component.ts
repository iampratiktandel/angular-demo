import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-temp',
  templateUrl: './ng-temp.component.html',
  styleUrls: ['./ng-temp.component.css']
})
export class NgTempComponent implements OnInit {

  user = {
    name:'Pratik',
    message:'Welcome to our site'
  }

  customers = [
    {
      name: 'Umang',
      product: 'Laptop'
    },
    {
      name: 'Ali',
      product: 'Mobile'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
