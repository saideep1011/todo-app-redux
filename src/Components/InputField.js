import React, { useState } from "react";
import { addTodo } from "../Store/Actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
export default function InputField() {
  const [name, setname] = useState();
  let dispatch = useDispatch();

  return (
    <div>
      <div className="row m-2">
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          className="col form-control"
          type="text"
          name="todo"
          placeholder="Add your New Todo"
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );

            setname("");
          }}
          className="btn btn-primary mx-2 "
        >
          Add todo
        </button>
      </div>
    </div>
  );
}
