// components/TodoForm.js
import { useState } from "react";
import axios from "axios";

interface TodoFormProps {
  fetchTodos: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ fetchTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/todos/", { title, description })
      .then((response) => {
        fetchTodos();
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("There was an error creating the todo!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
