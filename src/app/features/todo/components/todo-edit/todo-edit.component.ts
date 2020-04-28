import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Todo } from 'src/app/core/models/todo.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: Todo;
  todoForm: FormGroup;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.initTodoForm();
    this.route.paramMap.subscribe( (params: ParamMap) => {
      if(params.get('idTodo')){
        
        let idTodo = Number.parseInt(params.get('idTodo'));
        this.todo = this.todoService.getTodoById(idTodo);

        this.initTodoForm(this.todo)

      } else{
        this.initTodoForm();
      }
    })
  }

  initTodoForm( todo: Todo = {idTodo: null ,message: '', done: false} ): void {
    this.todoForm = new FormGroup({
      message: new FormControl(todo.message),
      done: new FormControl(todo.done),
      idTodo: new FormControl(todo.idTodo)
    })
  }

  createTodo(){
    let newTodo: Todo = new Todo();
    newTodo.message = this.todoForm.get('message').value;
    newTodo.done = this.todoForm.value.done
    newTodo.idTodo = 10;
  }

  cancelTodo(): void {
    this.router.navigate(['../'])
  }

}
