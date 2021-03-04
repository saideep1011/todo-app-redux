import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Store/Actions";
import { AiFillDelete } from "react-icons/ai";
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
        <div className="col">
          {" "}
          <h4>{todo.name}</h4>
        </div>

        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="btn btn-primary m-4"
        >
          {" "}
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
