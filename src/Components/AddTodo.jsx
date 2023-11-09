import React, { useRef } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { addNewTodo } from "../features/todolist";
import { useDispatch, useSelector } from "react-redux";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.darkmode);
  const radioRef = useRef();

  function HandleNewTodo() {
    if (newTodo === "") {
      return;
    } else {
      dispatch(
        addNewTodo({
          id: nanoid(4),
          content: newTodo,
          completed: false,
          active: true,
        })
      );
      setNewTodo("");
      radioRef.current.checked = false;
    }
  }

  console.log(radioRef.current);

  return (
    <div
      className={`${
        darkmode.state
          ? "w-1/3 justify-between flex mt-10 bg-slate-800 py-3 px-2 rounded"
          : "w-1/3 justify-between flex mt-10 bg-slate-100 py-3 px-2 rounded"
      }`}
    >
      <div className="flex items-center justify-center">
        <input
          ref={radioRef}
          disabled={newTodo === "" ? true : false}
          onChange={() => HandleNewTodo()}
          className="ml-2 appearance-none w-6 h-6 border-sky-300 border rounded-full checked:bg-gradient-to-r checked:from-sky-300 checked:to-fuchsia-500"
          type="radio"
          name=""
          id=""
        />
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className={`${
            darkmode.state
              ? "bg-slate-800 ml-4 text-gray-300 outline-none placeholder:text-gray-300"
              : "bg-slate-100 ml-10 text-slate-950 outline-none placeholder:text-gray-300"
          }`}
          placeholder="Create a new todo..."
          type="text"
        />
      </div>
    </div>
  );
}
