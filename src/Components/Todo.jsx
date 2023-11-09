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
          : "bg-slate-150 h-2/3 relative flex justify-center"
      }`}
    >
      <div className="w-1/3 flex flex-col items-center justify-center rounded absolute -top-10">
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
              ? "flex justify-between items-center w-full px-2 py-3 border-b-2 bg-slate-800"
              : "flex justify-between items-center w-full px-2 py-3 border-b-2 bg-slate-50"
          }`}
        >
          <button
            className={`${darkmode.state ? "text-slate-50" : "text-slate-950"}`}
          >
            <span>
              {todo.List.filter((el) => el.active === true).length} items left
            </span>
          </button>
          <div
            className={`${darkmode.state ? "text-slate-50" : "text-slate-950"}`}
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
            className={`${darkmode.state ? "text-gray-300" : "text-slate-950"}`}
          >
            Clear completed
          </button>
        </div>

        <p
          className={`${
            darkmode.state ? "mt-5 text-gray-300" : "mt-5 text-slate-950"
          }`}
        >
          Drag and drop to re-order the list
        </p>
      </div>
    </div>
  );
}
