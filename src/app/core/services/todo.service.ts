import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Utilisé pour simuler de l'asynchrone car c'est un Observable => on peut y subscribe
  todos: BehaviorSubject<Todo[]> = new BehaviorSubject(null);

  constructor() {
    this.initDatas();
  }

  getAllTodos(): Observable<Todo[]>{

    return this.todos;
  }

  getTodoById(idTodo): Todo{

    const result = this.todos.value.filter( t => {
      // new myArray = [];
      // myArray.push(t);
      return t.idTodo === idTodo;
    })

    let todo = result[0];

    return todo;
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
