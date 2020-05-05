import { NgModule } from '@angular/core';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarContainerComponent } from './container/car-container/car-container.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CarListComponent,
    CarDetailsComponent,
    CarContainerComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CarListComponent,
    CarDetailsComponent,
    CarContainerComponent
  ]
})
export class CarModule { }
