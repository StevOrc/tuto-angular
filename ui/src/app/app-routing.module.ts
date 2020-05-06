import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './features/todo/components/todo-list/todo-list.component';
import { TodoEditComponent } from './features/todo/components/todo-edit/todo-edit.component';
import { HomeContainerComponent } from './features/home-template/container/home-container/home-container.component';
import { TutoComponent } from './features/tuto/tuto.component';
import { CarContainerComponent } from './features/tuto/car/container/car-container/car-container.component';


const routes: Routes = [
  {path: 'home', component: HomeContainerComponent,
    children: [
      {path: 'todos', component: TodoListComponent},
      {path: 'todos/new', component: TodoEditComponent},
      {path: 'todos/:idTodo', component: TodoEditComponent},
      {path: 'tuto/bases-angular', component: TutoComponent},
      {path: 'tuto/in-out', component: CarContainerComponent},
    ]
  },
  {path: '**', redirectTo: 'home/todos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
