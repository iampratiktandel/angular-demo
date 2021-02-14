import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjRoutingModule } from './rxj-routing.module';
import { RxjComponent } from './rxj.component';
import { RxjOneComponent } from './rxj-one/rxj-one.component';
import { RxjTwoComponent } from './rxj-two/rxj-two.component';
import { RxjThreeComponent } from './rxj-three/rxj-three.component';
import { FormsModule } from '@angular/forms';
import { RxjService } from './rxj.service';


@NgModule({
  declarations: [RxjComponent, RxjOneComponent, RxjTwoComponent, RxjThreeComponent],
  imports: [
    CommonModule,
    RxjRoutingModule,
    FormsModule
  ],
  providers: [RxjService]
})
export class RxjModule { }
