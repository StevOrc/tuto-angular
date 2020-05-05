package com.example.ista.todo_list;

import com.example.ista.entity.Todo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {

    private TodoRepository todoRepository;
    private ModelMapper modelMapper;

    @Autowired
    public TodoService(TodoRepository todoRepository, ModelMapper modelMapper){
        this.todoRepository = todoRepository;
        this.modelMapper = modelMapper;
    }

    public TodoDto saveTodo(TodoDto todoDto){

        Todo todo = convertDtoToEntity(todoDto);
        TodoDto result = convertEntityToDto(this.todoRepository.save(todo));
        return todoDto;
    }

    public List<TodoDto> getAllTodos(){

        return convertListEntityToListDto(this.todoRepository.findAll());
    }

    public TodoDto getById(Long idTodo){

        return convertEntityToDto(this.todoRepository.findById(idTodo).get());
    }

    private List<TodoDto> convertListEntityToListDto(List<Todo> todoList){
        List<TodoDto> todoDtoList = new ArrayList<>();

        todoList.forEach( todo -> {
            TodoDto todoDto = modelMapper.map(todo, TodoDto.class);
            todoDtoList.add(todoDto);
        });

        return todoDtoList;
    }

    private Todo convertDtoToEntity(TodoDto todoDto){
        Todo todo = modelMapper.map(todoDto, Todo.class);

        return todo;
    }

    private TodoDto convertEntityToDto(Todo todo){
        TodoDto todoDto = modelMapper.map(todo, TodoDto.class);

        return todoDto;
    }
}
