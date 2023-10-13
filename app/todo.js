"use client";

import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [submitted, setSubmitted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
    setSubmitted(todo);
    setTodo("");
  };

  const changeTodo = (e) => {
    setTodo(e.target.value);
  };
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input todo here....."
          value={todo}
          className="w-80 h-10 border border-red-600"
          onChange={changeTodo}
        />
        <button className="w-30 h-6 bg-blue-800" type="submit">
          Submit
        </button>
      </form>
      <p>{submitted}</p>
    </>
  );
};

export default Todo;
