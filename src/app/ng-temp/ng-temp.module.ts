import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTempRoutingModule } from './ng-temp-routing.module';
import { NgTempComponent } from './ng-temp.component';


@NgModule({
  declarations: [NgTempComponent],
  imports: [
    CommonModule,
    NgTempRoutingModule
  ]
})
export class NgTempModule { }
