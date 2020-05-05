import { NgModule } from '@angular/core';
import { TutoModule } from './tuto/tuto.module';
import { SharedModule } from '../shared/shared.module';
import { TodoModule } from './todo/todo.module';
import { HomeTemplateModule } from './home-template/home-template.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    TutoModule,
    TodoModule,
    HomeTemplateModule
  ],
  exports: [
    TutoModule,
    TodoModule,
    HomeTemplateModule
  ]
})
export class FeaturesModule { }
