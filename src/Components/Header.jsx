import React from "react";
import AddTodo from "./AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { ChangeMode } from "../features/darkmode";

export default function Header() {
  const darkmode = useSelector((state) => state.darkmode);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        darkmode.state
          ? "h-1/3 flex flex-col items-center justify-center bg-[url('images/bg-mobile-dark.jpg')] bg-cover md:bg-[url('images/bg-desktop-dark.jpg')]"
          : "h-1/3 flex flex-col items-center justify-center bg-[url('images/bg-mobile-light.jpg')] bg-cover md:bg-[url('images/bg-desktop-light.jpg')]"
      }`}
    >
      <div className="flex w-4/5 md:w-1/3 justify-between">
        <h1 className="uppercase text-3xl md:text-4xl font-bold text-slate-50 tracking-[0.5em]">
          TODO
        </h1>

        <button onClick={() => dispatch(ChangeMode())}>
          <span>
            <img
              className="h-8 w-8"
              src={`${
                darkmode.state ? "images/icon-sun.svg" : "images/icon-moon.svg"
              }`}
              alt=""
            />
          </span>
        </button>
      </div>
      <AddTodo />
    </div>
  );
}
