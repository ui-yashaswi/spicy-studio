import React, { useEffect, useRef, useState } from "react";
import { canvasImages } from "./canvasImages.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import data from "./data.js";

function Canvas({ details }) {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const [index, setIndex] = useState({ value: startIndex }); // Initialize with a number directly
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: details.startIndex + details.numImages - 1,
      duration: details.duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = canvasImages[index.value]; // Prevent out-of-bound errors

    image.onload = () => {
      canvas.width = image.width * scale;
      canvas.height = image.height * scale;
      ctx.drawImage(image, 0, 0);
    };
  }, [index]); // Re-run this effect when `index` changes

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="canvas"
        className={`w-[${size}px] h-[${size}px]`}
      ></canvas>
    </div>
  );
}

export default Canvas;
