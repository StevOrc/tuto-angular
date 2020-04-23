import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()
export class TodoService {

  todos: BehaviorSubject<Todo[]> = new BehaviorSubject(null);

  constructor() {
    this.initDatas();
  }

  getAllTodos(){

    return this.todos.value;
  }

  getAllTodosAsObservable(): Observable<Todo[]> {
    return of(this.todos.value);
  }

  initDatas(): void{
    const datas : Todo[] = [];
    let todo1: Todo = {
      idTodo: 1,
      message: "Faire ngrx",
      done: false
    };
    let todo2: Todo = {
      idTodo: 2,
      message: "faire course",
      done: true
    };
    let todo3: Todo = {
      idTodo: 3,
      message: "dormir",
      done: false
    };
    datas.push(todo1);
    datas.push(todo2);
    datas.push(todo3);

    this.todos.next(datas);
  }
}
