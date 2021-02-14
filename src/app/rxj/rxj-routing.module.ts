import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjOneComponent } from './rxj-one/rxj-one.component';
import { RxjThreeComponent } from './rxj-three/rxj-three.component';
import { RxjTwoComponent } from './rxj-two/rxj-two.component';
import { RxjComponent } from './rxj.component';

const routes: Routes = [
  { 
    path: '', component: RxjComponent,
    children: [
      { path: '', component: RxjOneComponent },
      { path: 'one', component: RxjOneComponent },
      { path: 'two', component: RxjTwoComponent },
      { path: 'three', component: RxjThreeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjRoutingModule { }
