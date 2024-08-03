import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-4xl font-bold text-blue-600">TODO List</h1>
      </header>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1>TODO List</h1>
        <main>
          <div>
            <TodoForm />
          </div>
          <div>
            <TodoList />
          </div>
        </main>
      </div>
    </>
  );
}
