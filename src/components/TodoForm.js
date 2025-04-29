import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="أضف مهمة جديدة..."
      />
      <button type="submit">إضافة</button>
    </form>
  );
}

export default TodoForm;