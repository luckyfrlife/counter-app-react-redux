import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counter/action";

const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(increment());
  };
  const handleMinus = () => {
    dispatch(decrement());
  };
  return (
    <div className="px-4 h-52 w-96 flex items-center justify-center space-y-5">
      <div className="space-y-5">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={handlePlus}>
            Increment
          </button>
          <button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={handleMinus}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
