import React, { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addTodo = (todo) => {
    setTodos((each) => [{ id: Date.now(), ...todo }, ...each]);
  };

  const updateTodo = (id, todo) => {
    setTodos((each) =>
      each.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo))
    );
  };

  const removeTodo = (id) => {
    setTodos((each) => each.filter((eachTodo) => eachTodo.id !== id));
  };

  const isCompleted = (id) => {
    setTodos((each) =>
      each.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo
      )
    );
  };

  // Load theme from localStorage or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Set the theme class on the body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, removeTodo, isCompleted }}>
      <div className="min-h-screen py-8 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-gray-800 dark:text-gray-100">
            Manage Your Todos
          </h1>

          {/* Dark/Light Mode Toggle Button */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="p-2 rounded-lg bg-indigo-600 text-white mb-4 hover:bg-indigo-700 focus:outline-none"
          >
            Toggle Dark/Light Mode
          </button>

          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>

          <div className="flex flex-col gap-y-3 w-full">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
