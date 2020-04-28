import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Todo } from 'src/app/core/models/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todoForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initTodoForm();
  }

  initTodoForm(): void {
    this.todoForm = new FormGroup({
      message: new FormControl('Exemple'),
      done: new FormControl('true'),
      idTodo: new FormControl()
    })
  }

  createTodo(){
    let newTodo: Todo = new Todo();
    newTodo.message = this.todoForm.get('message').value;
    newTodo.done = this.todoForm.value.done
    newTodo.idTodo = 10;
  }

}
