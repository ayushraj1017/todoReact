import React from "react";

const Todo = ({ todo, onHandleCheck, onAdd }) => {
  return (
    <div>
      <li className={`list-style ${todo.isCompleted ? "todo-completed" : ""} `}>
        <input
          onClick={() => onHandleCheck(todo.id)}
          type="checkbox"
          checked={todo.isCompleted && "checked"}
        />
        {todo.text}
        <hr />
      </li>
    </div>
  );
};

export default Todo;
