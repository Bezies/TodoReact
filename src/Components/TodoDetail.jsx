import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../features/todolist";
import "./todoDetail.css";

export default function TodoDetail({ item }) {
  const darkmode = useSelector((state) => state.darkmode);
  const dispatch = useDispatch();

  return (
    <div
      id="todo"
      className={`${
        darkmode.state
          ? "w-full justify-between flex bg-slate-800 py-3 px-2 border-b-[1px] border-slate-50/20"
          : "w-full justify-between flex bg-slate-50 py-3 px-2 border-b-[1px] border-slate-50/20"
      }`}
    >
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <input
            className="ml-2 appearance-none w-6 h-6 border-sky-300 border rounded-full checked:bg-gradient-to-r checked:from-sky-300 checked:to-fuchsia-500"
            onClick={() => dispatch(completedTodo(item.id))}
            defaultChecked={item.completed ? true : false}
            type="radio"
            name=""
            id=""
          />

          {item.completed && (
            <span className="absolute z-10 flex top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2">
              <img src="/images/icon-check.svg" alt="" />
            </span>
          )}
        </div>
        <p
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            color:
              darkmode.state && item.completed
                ? "text-gray-100"
                : "text-gray-300",
          }}
          className={`${
            darkmode.state
              ? "bg-slate-800 ml-4 text-gray-400 text-sm md:text-base w-full"
              : "bg-slate-50 ml-4 text-slate-950 text-sm md:text-base w-full"
          }`}
        >
          {item.content}
        </p>
      </div>
      <button
        id="close"
        onClick={() => dispatch(deleteTodo(item.id))}
        className="mr-2"
      >
        <span>
          <img src="images/icon-cross.svg" className="" alt="" />
        </span>
      </button>
    </div>
  );
}
