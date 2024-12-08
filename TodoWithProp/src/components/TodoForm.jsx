function TodoForm({ onTodoChange, todo, onSubmit }) {
  const handleAdd = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!todo.trim()) {
      alert("Todo cannot be empty!");
      return;
    }
    onSubmit({ id: Date.now(), todo, completed: false });
  };

  return (
    <form className="todo-form" onSubmit={handleAdd}>
      <input
        value={todo}
        type="text"
        placeholder="Add a new task..."
        className="todo-input"
        onChange={(e) => onTodoChange && onTodoChange(e.target.value)}
      />
      <button type="submit" className="todo-add-button">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
