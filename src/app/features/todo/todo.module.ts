import { NgModule } from '@angular/core';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';



@NgModule({
  declarations: [ 
    TodoEditComponent,
    TodoListComponent
  ],
  imports: [
  ],
  exports: [
    TodoEditComponent,
    TodoListComponent
  ]
})
export class TodoModule { }
