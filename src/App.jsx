import React from "react";
import Canvas from "./Canvas";
import data from "./data.js";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-black text-white">
        {data.map((item, index) => (
          <div key={index}>
            {item.map((canvasdets, subIndex) => (
              <Canvas details={canvasdets} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
