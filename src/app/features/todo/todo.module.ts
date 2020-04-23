import { NgModule } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';



@NgModule({
  declarations: [
    TodoListComponent, 
    TodoEditComponent
  ],
  imports: [
  ],
  exports: [
    TodoListComponent, 
    TodoEditComponent
  ]
})
export class TodoModule { }
