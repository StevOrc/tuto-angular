import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutoComponent } from './tuto.component';
import { FormsModule } from '@angular/forms';
import { CarModule } from './car/car.module';



@NgModule({
  declarations: [
    TutoComponent
  ],
  imports: [
    CommonModule,
    CarModule,
    FormsModule,
  ],
  exports: [
    TutoComponent
  ]
    
})
export class TutoModule { }
