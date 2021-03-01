import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { RenderComponent } from './render.component';

const routes: Routes = [
  { 
    path: '', 
    component: RenderComponent
  },
  {
    path: 'comp-three',
    component: CompThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenderRoutingModule { }
