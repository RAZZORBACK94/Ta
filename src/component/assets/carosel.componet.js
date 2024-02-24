import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Carosel({ children: slide, autoslide = false, autoslideInterval = 3000 }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slide.length - 1 : curr - 1));
  const nex = () => setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoslide) return;
    const slideinterval = setInterval(nex, autoslideInterval);
    return () => clearInterval(slideinterval);
  }, []);

  return (
    <div className=" overflow-hidden relative">
      <div className=" flex transition-transfrom ease-out duration-500 " style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slide}
      </div>
      <div className=" absolute inset-0 flex items-center justify-between p-4 text-3xl ">
        <button onClick={prev} className=" p-1 rounded-full shadow bg-white/95 text-red-600 hover:bg-white">
          <IoIosArrowBack />
        </button>
        <button onClick={nex} className=" p-1 rounded-full shadow bg-white/95 text-red-600 hover:bg-white">
          <IoIosArrowForward />
        </button>
      </div>
      <div className=" absolute bottom-4 right-0 left-0">
        <div className=" flex items-center justify-center gap-2">
          {slide.map((_, i) => (
            <div className={` transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-3" : "bg-opacity-50"} `} />
          ))}
        </div>
      </div>
    </div>
  );
}
