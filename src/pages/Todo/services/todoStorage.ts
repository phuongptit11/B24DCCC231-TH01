import { Todo } from "../types";

const TODO_KEY = "todo_list";

// Lấy danh sách todo từ localStorage
export const getTodos = (): Todo[] => {
  const data = localStorage.getItem(TODO_KEY);
  return data ? JSON.parse(data) : [];
};

// Lưu danh sách todo vào localStorage
export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
};
