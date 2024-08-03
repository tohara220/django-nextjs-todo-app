"use client";

import { useState } from "react";
import axios from "axios";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/todos/", { title, description })
      .then(() => {
        // ここでTodoListコンポーネントを再レンダリングする方法を考える必要があります
        // 例えば、グローバルな状態管理やコンテキストを使用する
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
}
