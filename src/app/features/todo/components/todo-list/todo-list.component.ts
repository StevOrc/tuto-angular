import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe(data => {
      this.todos = data;
    })
  }
}
