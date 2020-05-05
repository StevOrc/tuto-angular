package com.example.ista.todo_list;

import com.example.ista.entity.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("todos")
public class TodoResource {

    private TodoService todoService;
    private TodoRepository repository;

    @Autowired
    public TodoResource(TodoService todoService, TodoRepository repository){

        this.repository = repository;
        this.todoService = todoService;
    }

    @PostMapping("save")
    public ResponseEntity<TodoDto> createOrUpdateTodo(@RequestBody TodoDto todoDto){

        TodoDto result = this.todoService.saveTodo(todoDto);
        if (result == null){
            new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        return new  ResponseEntity<>(result, HttpStatus.OK);
    }

    @DeleteMapping("delete/{idTodo}")
    public ResponseEntity<TodoDto> deleteTodo(@PathVariable Long idTodo){
        System.out.println("test");
        return null;
    }

    @GetMapping("getById/{idTodo}")
    public ResponseEntity<TodoDto> getTodoById(@PathVariable Long idTodo){

        TodoDto result = this.todoService.getById(idTodo);
        if (result == null){
            new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        return new  ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("all")
    public ResponseEntity<List<TodoDto>> getAllTodos(){

        List<TodoDto> result = this.todoService.getAllTodos();
        if (result == null){
            new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        return new  ResponseEntity<>(result, HttpStatus.OK);
    }
}
