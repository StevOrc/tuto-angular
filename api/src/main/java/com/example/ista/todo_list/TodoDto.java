package com.example.ista.todo_list;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoDto {

    private Long idTodo;
    private String message;
    private Boolean done;
}
