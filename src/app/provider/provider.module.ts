import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { LoggerService } from './logger-service/logger.service';
import { DateLoggerService } from './date-logger/date-logger.service';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { NAME } from './name';


@NgModule({
  declarations: [ProviderComponent, CompOneComponent, CompTwoComponent, CompThreeComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ],
  providers: [
    {provide: LoggerService, useClass: DateLoggerService},
    {provide: DateLoggerService, useExisting: LoggerService},
    {provide: NAME, useValue: 'Pratik'}
  ]
})
export class ProviderModule { }
