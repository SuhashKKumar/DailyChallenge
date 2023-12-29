import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <>
      {todos.map(({ id, text }) => {
        return (
          <div key={id}>
            <div>{text}</div>
            <button onClick={() => dispatch(removeTodo(id))}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
