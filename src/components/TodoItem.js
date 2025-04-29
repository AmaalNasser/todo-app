import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <button onClick={handleEdit}>حفظ</button>
          <button onClick={() => setIsEditing(false)}>إلغاء</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>حذف</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;