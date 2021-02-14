import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternRoutingModule } from './intern-routing.module';
import { InternComponent } from './intern.component';
import { AddInternComponent } from './add-intern/add-intern.component';
import { ListInternComponent } from './list-intern/list-intern.component';
import { EditInternComponent } from './edit-intern/edit-intern.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionalDirective } from './optional.directive';


@NgModule({
  declarations: [InternComponent, AddInternComponent, ListInternComponent, EditInternComponent, OptionalDirective],
  imports: [
    CommonModule,
    InternRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InternModule { }
