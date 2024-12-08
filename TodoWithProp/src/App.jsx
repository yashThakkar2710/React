import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todo, setTodo] = useState(""); // Stores the current input
  const [todos, setTodos] = useState([]); // Stores the list of todos

  // Add new todo
  const HandleSubmit = (newTodo) => {
    setTodos((prev) => [newTodo, ...prev]); // Add the new todo to the start of the list
    setTodo(""); // Clear the input field
  };

  // Toggle completed state
  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="todo-title">To-Do Manager</h1>
        <TodoForm
          onTodoChange={setTodo}
          todo={todo}
          onSubmit={HandleSubmit}
        />
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
