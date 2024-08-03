"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = () => {
    axios
      .get<Todo[]>("http://localhost:8000/api/todos/")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the todos!", error);
      });
  };
  const deleteTodo = (id: number) => {
    axios
      .delete(`http://localhost:8000/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the todo!", error);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h2>タイトル： {todo.title}</h2>
          <p>内容: {todo.description}</p>
          <p>完了フラグ: {todo.completed ? "Completed" : "Not Completed"}</p>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
}
