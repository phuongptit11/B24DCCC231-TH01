import { useState } from "react";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button disabled={!value.trim()}>Thêm</button>
    </form>
  );
};
