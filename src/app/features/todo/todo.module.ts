import { NgModule } from '@angular/core';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ 
    TodoEditComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoEditComponent,
    TodoListComponent
  ]
})
export class TodoModule { }
