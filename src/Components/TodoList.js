import React from "react";
import TodoItem from "./TodoItem";
export default function TodoList() {
  return (
    <div className="my-4">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
