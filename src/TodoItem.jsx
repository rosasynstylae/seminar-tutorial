import React from 'react';

const TodoItem = ({ todo, onClick, color }) => (
  <div className="todoItem" style={{ color }} onClick={() => onClick(todo.id)}>
    {todo.name}
  </div>
);

export default TodoItem;
