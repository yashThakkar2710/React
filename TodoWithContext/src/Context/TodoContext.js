import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  removeTodo: (id) => {},
  isCompleted: (id) => {},
});

export const TodoProvider = todoContext.Provider;

export const useTodo = () => {
  return useContext(todoContext);
};
