import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from "@angular/cdk/portal";
import { OverlayModule } from "@angular/cdk/overlay";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeService } from './services/employee.service';
import { DynoComponent } from './dyno/dyno.component';
import { DevComponent } from './dev/dev.component';
import { PortalCdkComponent } from './portal-cdk/portal-cdk.component';
import { ProfileOverlayComponent, RotiniPanel, UserProfileComponent } from './profile-overlay/profile-overlay.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynoComponent,
    DevComponent,
    PortalCdkComponent,
    ProfileOverlayComponent,
    // UserProfileComponent
    RotiniPanel,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PortalModule,
    OverlayModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
