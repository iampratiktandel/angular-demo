import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderRoutingModule } from './render-routing.module';
import { RenderComponent } from './render.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { FormsModule } from '@angular/forms';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CustomDirective } from './shared/directives/custom.directive';
import { CompFourComponent } from './comp-four/comp-four.component';


@NgModule({
  declarations: [RenderComponent, CompOneComponent, CompTwoComponent, CompThreeComponent, CustomDirective, CompFourComponent],
  imports: [
    CommonModule,
    RenderRoutingModule,
    FormsModule
  ]
})
export class RenderModule { }
