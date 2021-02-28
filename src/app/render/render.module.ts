import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderRoutingModule } from './render-routing.module';
import { RenderComponent } from './render.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RenderComponent, CompOneComponent, CompTwoComponent],
  imports: [
    CommonModule,
    RenderRoutingModule,
    FormsModule
  ]
})
export class RenderModule { }
