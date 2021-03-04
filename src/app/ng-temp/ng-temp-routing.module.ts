import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgTempComponent } from './ng-temp.component';

const routes: Routes = [{ path: '', component: NgTempComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgTempRoutingModule { }
