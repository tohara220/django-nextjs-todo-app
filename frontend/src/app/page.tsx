import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";

export default function Home() {
  return (
    <div>
      <h1>TODO List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
