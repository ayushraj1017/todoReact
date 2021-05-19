import Todo from "./Todo";

const Todos = ({ todos, onHandleCheck, onAdd }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo todo={todo} onAdd={onAdd} onHandleCheck={onHandleCheck} />;
      })}
    </div>
  );
};

export default Todos;
