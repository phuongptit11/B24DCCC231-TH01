import { useEffect, useState } from "react";
import { Todo } from "./types";
import { getTodos, saveTodos } from "./services/todoStorage";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Khi load trang → đọc todo từ localStorage
  useEffect(() => {
    setTodos(getTodos());
  }, []);

  // Mỗi khi todos thay đổi → lưu lại
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // Thêm mới todo
  const addTodo = (title: string) => {
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };

    setTodos(prev => [...prev, newTodo]);
  };

  // Xóa todo
  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // Đánh dấu hoàn thành
  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div>
      <h2>📝 Todo List</h2>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
    </div>
  );
}
