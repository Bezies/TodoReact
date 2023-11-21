import { useDispatch, useSelector } from "react-redux";
import {
  completedTodo,
  deleteTodo,
  clearCompleteTodo,
} from "../features/todolist";
import { useState } from "react";
import TodoDetail from "./TodoDetail";

export default function Todo() {
  const todo = useSelector((state) => state.todolist);
  const darkmode = useSelector((state) => state.darkmode);
  const dispatch = useDispatch();

  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  function handleActive() {
    setAll(false);
    setActive(true);
    setCompleted(false);
  }

  function handleAll() {
    setAll(true);
    setActive(false);
    setCompleted(false);
  }

  function handleCompleted() {
    setAll(false);
    setActive(false);
    setCompleted(true);
  }

  return (
    <div
      className={`${
        darkmode.state
          ? "bg-slate-950 h-2/3 relative flex justify-center"
          : "bg-slate-100 h-2/3 relative flex justify-center"
      }`}
    >
      <div className="w-4/5 md:w-1/3 flex flex-col items-center justify-center rounded absolute -top-10">
        {all &&
          todo.List.map((item) => <TodoDetail key={item.id} item={item} />)}

        {/* ACTIVE  */}
        {active &&
          !all &&
          todo.List.filter((el) => el.active === true).map((item) => (
            <TodoDetail key={item.id} item={item} />
          ))}

        {/* COMPLETED  */}
        {completed &&
          !all &&
          todo.List.filter((el) => el.completed === true).map((item) => (
            <TodoDetail key={item.id} item={item} />
          ))}

        {/* CHOOSE BOX ACTIVE / COMPLETED  */}

        <div
          className={`${
            darkmode.state
              ? "flex justify-between items-center w-full px-2 py-3 border-b-[1px] border-slate-50/20 bg-slate-800"
              : "flex justify-between items-center w-full px-2 py-3 border-b-[1px] border-slate-50/20 bg-slate-50"
          }`}
        >
          <button
            className={`${
              darkmode.state
                ? "text-gray-300 text-sm font-thin"
                : "text-slate-950 text-sm font-thin"
            }`}
          >
            <span>
              {todo.List.filter((el) => el.active === true).length} items left
            </span>
          </button>
          <div
            className={`${
              darkmode.state
                ? "text-slate-50 hidden md:flex"
                : "text-slate-950 hidden md:flex"
            }`}
          >
            <button
              onClick={() => handleAll()}
              style={{ color: all && "hsl(220, 98%, 61%)" }}
              className={`${
                darkmode.state
                  ? "focus:text-blue-500 text-gray-300"
                  : "text-slate-950"
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleActive()}
              style={{ color: active && "hsl(220, 98%, 61%)" }}
              className={`${
                darkmode.state
                  ? "focus:text-blue-500 text-gray-300 mx-2"
                  : "text-slate-950 mx-2"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => handleCompleted()}
              style={{ color: completed && "hsl(220, 98%, 61%)" }}
              className={`${
                darkmode.state
                  ? "focus:text-blue-500 text-gray-300"
                  : "text-slate-950"
              }`}
            >
              Completed
            </button>
          </div>
          <button
            onClick={() =>
              dispatch(
                clearCompleteTodo(
                  todo.List.filter((el) => el.completed === true)
                )
              )
            }
            className={`${
              darkmode.state
                ? "text-gray-300 text-sm font-thin"
                : "text-slate-950 text-sm font-thin"
            }`}
          >
            Clear completed
          </button>
        </div>

        {/* MENU MOBILE  */}
        <div
          className={`${
            darkmode.state
              ? "flex md:hidden font-semibold justify-around items-center w-full mt-5 rounded px-5 py-3 border-b-[1px] border-slate-50/20 bg-slate-800"
              : "flex md:hidden font-semibold justify-around items-center w-full mt-5 rounded px-5 py-3 border-b-[1px] border-slate-50/20 bg-slate-50"
          }`}
        >
          <button
            onClick={() => handleAll()}
            style={{ color: all && "hsl(220, 98%, 61%)" }}
            className={`${
              darkmode.state
                ? "focus:text-blue-500 text-gray-300"
                : "text-slate-950"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleActive()}
            style={{ color: active && "hsl(220, 98%, 61%)" }}
            className={`${
              darkmode.state
                ? "focus:text-blue-500 text-gray-300 mx-2"
                : "text-slate-950 mx-2"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => handleCompleted()}
            style={{ color: completed && "hsl(220, 98%, 61%)" }}
            className={`${
              darkmode.state
                ? "focus:text-blue-500 text-gray-300"
                : "text-slate-950"
            }`}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}
