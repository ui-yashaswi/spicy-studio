import React, { useState } from "react";
import Canvas from "./Canvas";
import data from "./data.js";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function App() {
  const [showCanwas, setShowcanws] = useState(false);
  const headingref = useRef(null);
  // const growing = useRef(null);

  useEffect(() => {
    const gsap = gsap.registerPlugin(useGSAP);
  }, []);

  useGSAP(() => {
    const locomotiveScroll = new LocomotiveScroll();
    headingref.current.addEventListener("click", (e) => {
      setShowcanws(!showCanwas);
    });
  }, [showCanwas]);
  return (
    <>
      <span className="growing"></span>
      <div className="w-full h-screen relative  text-white">
        {showCanwas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}

        <nav className="w-full h-20 flex items-center justify-between px-10  top-0 z-50 text-white">
          <div className="text-2xl font-bold">Spicy Studio</div>
          <ul className="flex gap-10">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li
                key={link}
                className="cursor-pointer hover:text-red-500 transition-colors "
              >
                {link}
              </li>
            ))}
          </ul>
        </nav>

        <div className="textcontainer w-full px-[20%]">
          <div className="text w-[60%]">
            <h3 className="text-3xl leading-[1.5] tracking-tight">
              At Thirtysixstudio, we build immersive digital experiences for
              brands with a purpose.
            </h3>
            <p className="text-md w-[80%] mt-10 font-md">
              We're a boutique production studio focused on design, motion, and
              creative technology, constantly reimagining what digital craft can
              do for present-time ads and campaigns.
            </p>

            <p className="text-md my-10 font-md ">Scroll</p>
          </div>
        </div>

        <div className=" w-full bottom-10 left-0 absolute">
          <h1
            ref={headingref}
            className="text-[17rem] font-normal text-yellow-400 font-sans tracking-tighter leading-none pl-5"
          >
            spicystudios
          </h1>
        </div>

        <div className="bg-red-60 w-full h-[60vh] bg-slate-700"></div>
        <div className="w-full h-screen relative p-10">
          {data[0].map((canvasdets, index) => (
            <Canvas details={canvasdets} />
          ))}
          <div className="relative z-[1]">
            <h1 className="text-7xl font-semibold tracking-tighter">
              about the brand
            </h1>
            <p className="text-[29px] w-[80%] tracking-tight leading-[50px] z-[10] mt-10 font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              non, accusamus similique quibusdam, Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Reiciendim velit non dolorem culpa.
              nihil hic beatae architecto blanditiis dolores cumque aliquid,
              quas minus ea laborum debitis iure ipsa autem magnam?
            </p>

            <div className="w-full h-[20vh] z-0">
              {/* {" "}
              {data[0].map((canvasdets, index) => (
                <Canvas details={canvasdets} />
              ))} */}
            </div>

            <img
              className="w-[80%] mt-10 relative z-[0]"
              src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
