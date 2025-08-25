"use client";

import { Button } from "@/components";
import { useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    setTodos([...todos, { title: inputValue, isDone: true }]);
    setInputValue("");
  };

  return (
    <div className="bg-white h-screen ">
      <input
        className="bg-gray-400 border border-black text-black text-black"
        value={inputValue}
        type="text"
        placeholder="add todo"
        onChange={handleOnchange}
      />
      {todos.map((todo, index) => (
        <div className="" key={index + Math.random()}>
          <input
            className="text-black"
            type="checkbox"
            defaultChecked={todo.isDone}
          />
          <div>{todo.title}</div>
        </div>
      ))}
      <Button onClick={handleOnClick} title="add"></Button>
    </div>
  );
};

export default TodoPage;
