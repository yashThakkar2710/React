function TodoItem({ todo, toggleCompleted, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
          className="todo-checkbox"
          aria-label="Mark as completed"
        />
        <span className={`todo-text ${todo.completed ? "line-through" : ""}`}>
          {todo.todo}
        </span>
      </div>
      <button
        className="todo-delete-button"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
