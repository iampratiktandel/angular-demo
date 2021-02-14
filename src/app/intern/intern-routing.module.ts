import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInternComponent } from './add-intern/add-intern.component';
import { EditInternComponent } from './edit-intern/edit-intern.component';
import { InternComponent } from './intern.component';
import { ListInternComponent } from './list-intern/list-intern.component';

const routes: Routes = [
  {
    path: '', component: InternComponent,  
    children: [
      { path: '', component: ListInternComponent },
      { path: 'add', component: AddInternComponent },
      { path: 'edit', component: EditInternComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternRoutingModule { }
