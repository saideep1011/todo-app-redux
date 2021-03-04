import React from "react";

function TodoItem({ todo }) {
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>{todo.id}</div>
        <div className="col">
          {" "}
          <h4>{todo.name}</h4>
        </div>
        <button className="btn btn-primary m-4"> edit</button>
        <button className="btn btn-primary m-4"> Delete</button>
      </div>
    </div>
  );
}
export default TodoItem;
