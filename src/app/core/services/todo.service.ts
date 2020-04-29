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

  editTodo(editTodo: Todo){

    // On filtre sur le tableau des todo
    // => on récupère un nouveau tableau sans la todo ayant le même id
    // on push ensuite l'élément modifié dans le formulaire
    const allTodos = this.todos.value.filter( el => {
      return el.idTodo !== editTodo.idTodo;
    });

    allTodos.push(editTodo);
    this.todos.next(allTodos);
  }

  saveNewTodo(newTodo: Todo){
    const allTodos = this.todos.value;
    allTodos.push(newTodo);

    this.todos.next(allTodos);
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
