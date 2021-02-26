import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { NameService } from './provider-service/name.service';
import { DateService } from './provider-service/date.service';
import { AgeService } from './provider-service/age.service';

var configValue: number = 1;
var getLogObject = () => {
  if(configValue === 1) {
    return new AgeService();
  } else {
    return new DateService();
  }
}

@NgModule({
  declarations: [ProviderComponent, CompOneComponent, CompTwoComponent, CompThreeComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ],
  providers: [
    /* useClass */
    { provide: NameService, useClass: NameService },
    { provide: DateService, useClass: DateService },
    { provide: AgeService, useClass: AgeService },
    // { provide: AgeService, useClass: NameService }

    /* useExisting */
    // { provide: DateService, useExisting: NameService },
    // { provide: AgeService, useExisting: NameService }

    /* useFactory */
    // { provide: DateService, useFactory: getLogObject }
  ]
})
export class ProviderModule { }
