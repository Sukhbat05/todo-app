"use client";

import { useState } from "react";

import { Box, Task } from "@/components";

import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const [todos, setTodos] = useState([]); // mapalj haruulj bga array
  const [activeTab, setActive] = useState("All");

  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    setTodos([...todos, { title: inputValue, isDone: false, id: uuidv4() }]);
    setInputValue("");
  };

  const deleteComplete = () => {
    const deleteCompleted = todos.filter((todo) => !todo.isDone);
    setTodos(deleteCompleted);
  };

  const allChange = () => {
    setActive("All");
  };

  const activeChange = () => {
    setActive("Active");
  };

  const completedChange = () => {
    setActive("Completed");
  };

  const filteredData = todos.filter((el) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return !el.isDone;
    return el.isDone;
  });

  console.log(filteredData, "datas");

  return (
    <div className=" flex justify-center items-center flex-col pt-15 bg-white h-screen">
      <div className="h-fit w-[377px] bg-white border-3 border-black-500">
        <div className="flex justify-center mt-6 text-black font-semibold text-[20px]">
          To-Do List
        </div>
        <div className="flex justify-center gap-[6px] mt-4 ">
          <input
            value={inputValue}
            onChange={handleOnchange}
            type="text"
            className="border rounded-[6px] border-black w-[280px] text-[#000000] pl-4"
            placeholder="Add a new task..."
          />

          <Box
            isActive={true}
            onClick={handleOnClick}
            // className="border border-[#E4E4E7] text-[#71717A] bg-[#3C82F6]"
            title="Add"
            // backgroundColor="#3C82F6"
            text="Hello"
          />
        </div>
        <div className="flex  gap-[6px] mt-5  w-[32px] ml-4 text-[12px]">
          <Box
            isActive={activeTab === "All"}
            onClick={allChange}
            title="All"
            backgroundColor="#3C82F6"
            text="white"
            height="32px"
          />
          <Box
            isActive={activeTab === "Active"}
            onClick={activeChange}
            title="Active"
            backgroundColor="#F3F4F6"
            height="32px"
            color="black"
          />
          <Box
            isActive={activeTab === "Completed"}
            onClick={completedChange}
            title="Completed"
            backgroundColor="#F3F4F6"
            height="32px"
            color="black"
          />
        </div>
        <div className="px-4 ">
          {filteredData.map((todo) => {
            return (
              <Task
                key={todo.id}
                todos={todos}
                id={todo.id}
                setTodos={setTodos}
                taskText={todo.title}
                isDone={todo.isDone}
              />
            );
          })}

          <div className="flex justify-between px-[20px] mt-5">
            {todos.length === 0 ? (
              <div className="text-[#6B7280]  mx-10">
                No tasks yet. Add one above!
              </div>
            ) : (
              <div className="flex justify-between gap-5">
                {""}
                <div className="text-[#6B7280] flex gap-1">
                  {filteredData.filter((todo) => todo.isDone).length} of{" "}
                  {todos.length} tasks completed
                </div>
                <button className="text-[#EF4444]" onClick={deleteComplete}>
                  Clear completed
                </button>
              </div>
            )}
          </div>
          <div className="text-[12px] flex justify-center p-1 mb-5 mt-10">
            <p className="text-gray-400">Powered by</p>
            <a className="text-blue-500">Pinecone academy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
