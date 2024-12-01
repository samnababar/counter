"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-4 border-gray-500 p-10 rounded-lg">
        <button
          className="py-2 px-4 bg-blue-400 rounded-md text-6xl"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>

        <span className="mx-7 text-5xl">{count}</span>

        <button
          className="py-2 px-4 bg-blue-400 rounded-md text-6xl"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
