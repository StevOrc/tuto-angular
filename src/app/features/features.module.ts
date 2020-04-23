import { NgModule } from '@angular/core';
import { TutoModule } from './tuto/tuto.module';
import { SharedModule } from '../shared/shared.module';
import { TodoModule } from './todo/todo.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    TutoModule,
    TodoModule
  ],
  exports: [
    TutoModule,
    TodoModule
  ]
})
export class FeaturesModule { }
