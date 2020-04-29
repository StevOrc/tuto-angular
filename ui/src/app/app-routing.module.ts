import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './features/todo/components/todo-list/todo-list.component';
import { TodoEditComponent } from './features/todo/components/todo-edit/todo-edit.component';


const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {path: 'todos', component: TodoListComponent},
  {path: 'todos/new', component: TodoEditComponent},
  {path: 'todos/:idTodo', component: TodoEditComponent},
  {path: '**', redirectTo: 'todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
