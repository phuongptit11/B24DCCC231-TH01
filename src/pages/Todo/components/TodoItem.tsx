import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export const TodoItem = ({ todo, onDelete, onToggle }: TodoItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.title}
      </span>

      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
};
