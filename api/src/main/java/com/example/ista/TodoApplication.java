package com.example.ista;

import com.example.ista.entity.Todo;
import com.example.ista.todo_list.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class TodoApplication {

	@Autowired
	TodoRepository repository;

	@PostConstruct
	public void initData(){
		Todo todo1 = new Todo(101L, "Faire RXJS", false);
		Todo todo2 = new Todo(102L, "Dormir", true);
		Todo todo3 = new Todo(103L, "Manger", false);
		Todo todo = new Todo(104L, "TEST", true);
		List<Todo> todoList = new ArrayList<>();
		todoList.add(todo1); todoList.add(todo2); todoList.add(todo3); todoList.add(todo);

		this.repository.saveAll(todoList);
	}

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}

}
