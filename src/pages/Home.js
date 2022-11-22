import React from "react";

export default function Home() {
  return (
    <div className="bg-blue-800 h-screen overflow-hidden">
      <h1 className="text-white font-bold text-center text-6xl pt-24">
        Jeopardy
      </h1>
      <div className="text-center">
        <a href="/game" className="text-white">
          <button className="border-2 border-white rounded-md px-5 py-1 mt-12 hover:bg-blue-600">
            Start
          </button>
        </a>
      </div>
    </div>
  );
}
