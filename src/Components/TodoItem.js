import React from "react";

export default function TodoItem() {
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>1</div>
        <div className="col">
          {" "}
          <h4>todo title</h4>
        </div>
        <button> Delete</button>
      </div>
    </div>
  );
}
