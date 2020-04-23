import { NgModule } from '@angular/core';
import { TutoModule } from './tuto/tuto.module';
import { SharedModule } from '../shared/shared.module';
import { CarModule } from './car/car.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    TutoModule,
    CarModule
  ],
  exports: [TutoModule]
})
export class FeaturesModule { }
