import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user.service';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    OverlayModule
  ],
  entryComponents: [
    UserDetailComponent
  ],
  providers: [UserService],
})
export class UserModule { }
