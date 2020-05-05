import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  url: string = 'http://localhost:8080/todos/';

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {

    return this.http.get<Todo[]>(this.url + 'all');
  }

  saveTodo(todo): Observable<Todo> {

    return this.http.post<Todo>(this.url + 'save', todo);
  }

  deleteTodo(idTodo): Observable<any> {

    return this.http.delete<any>(this.url + 'save' + '/' +idTodo);
  } 
}
