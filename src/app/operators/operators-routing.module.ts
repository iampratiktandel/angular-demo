import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { MapComponent } from './map/map.component';
import { OperatorsComponent } from './operators.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

const routes: Routes = [
  { 
    path: '', 
    component: OperatorsComponent,
    children: [
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'fork',
        component: ForkJoinComponent
      },
      {
        path: 'concat-map',
        component: ConcatMapComponent
      },
      {
        path: 'switch-map',
        component: SwitchMapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
