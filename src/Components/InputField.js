import React, { useState } from "react";

export default function InputField() {
  const [state, setstate] = useState(null);

  return (
    <div>
      <div className="row m-2">
        <input
          className="col form-control"
          type="text"
          name="todo"
          placeholder="Add your New Todo"
        />
        <button className="btn btn-primary mx-2 ">Add todo</button>
      </div>
    </div>
  );
}
