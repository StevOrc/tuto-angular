import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe( data =>{
      if(data){
        this.todos = data;
      }
    })
  }

  dateNow(): string{
    let dateNow = '';
    const now = new Date();
    let day;
    let month;
    if(now.getDate() < 10)
      day = '0'+now.getDate();
    else{
      day = now.getDate();
    }

    if(now.getMonth() < 10)
      month = '0'+(now.getMonth()+1)
    else
      month = now.getMonth()+1;

    dateNow = `${day} / ${month} / ${now.getFullYear()}`
     
    return dateNow;
  }

}
