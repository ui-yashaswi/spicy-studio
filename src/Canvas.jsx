import React, { useEffect, useRef, useState } from "react";
import { canvasImages } from "./canvasImages.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({ startIndex }) {
  const [index, setIndex] = useState({ value: startIndex }); // Initialize with a number directly
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex,
      duration: 3,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = canvasImages[index.value]; // Prevent out-of-bound errors

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    };
  }, [index]); // Re-run this effect when `index` changes

  return (
    <div>
      <canvas ref={canvasRef} id="canvas" className="w-64 h-64  "></canvas>
    </div>
  );
}

export default Canvas;
