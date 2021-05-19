import Todos from "./Todos";
import { useState } from "react";

const Data = ({}) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Work-1",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Work-2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Work-3",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Work-4",
      isCompleted: true,
    },
  ]);

  const onAdd = (todo) => {
    const id = Math.floor(Math.random()) * 10000 + 1;
  };

  const onHandleCheck = (id) => {
    const Updatedtodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    setTodos(Updatedtodos);
  };

  return <Todos todos={todos} onAdd={onAdd} onHandleCheck={onHandleCheck} />;
};

export default Data;
