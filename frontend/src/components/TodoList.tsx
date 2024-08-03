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

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>{todo.completed ? "Completed" : "Not Completed"}</p>
        </li>
      ))}
    </ul>
  );
}
