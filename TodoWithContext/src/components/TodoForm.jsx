import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={handleAdd} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <div className="flex w-full">
        <input
          type="text"
          className="flex-1 bg-transparent text-lg text-gray-700 dark:text-gray-200 px-4 py-3 rounded-lg shadow-sm border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500"
          placeholder="What needs to be done?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none w-36"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
  