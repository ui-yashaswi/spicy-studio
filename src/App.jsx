import React from "react";
import Canvas from "./Canvas";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-black text-white">
        <Canvas startIndex={0} />
        <Canvas startIndex={159} />
        <Canvas startIndex={300} />
      </div>
    </>
  );
}

export default App;
