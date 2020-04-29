import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutoComponent } from './tuto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TutoComponent
  ]
    
})
export class TutoModule { }
