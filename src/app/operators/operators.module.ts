import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { MapComponent } from './map/map.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';


@NgModule({
  declarations: [OperatorsComponent, MapComponent, ForkJoinComponent, ConcatMapComponent, SwitchMapComponent],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule { }
