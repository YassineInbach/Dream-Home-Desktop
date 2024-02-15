import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
function Subscribe() {
  const [ref, inView] = useInView();
  const [show, setShow] = useState(false);

  const Subscribe = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateX(0)" : "translateX(30px)",
    delay: 1200,
  });

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} className="font-poppins flex justify-center">
        <animated.div
          style={Subscribe}
          className="absolute top-[110px] flex flex-col items-center justify-center bg-white w-max p-4 shadow-sm shadow-black rounded-sm "
        >
          <h2 className="text-base font-semibold tracking-wide">
            Subscribe for any news updates
          </h2>
          <form action="" className="flex items-center gap-x-3 pt-2 ">
            <div>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your Email "
                required
                className="w-[320px] py-[5px] px-[10px] text-black text-[13px] placeholder:text-[12px] font-normal bg-transparent border-blue border-2 border-solid outline-none transition duration-300 ease-in-out rounded-[8px] hover:outline-black hover:border-none focus:border-none focus:outline-black"
              />
            </div>
            <button
              type="button"
              className="bg-transparent w-[90px] h-[33px] text-[14px] font-medium text-blue rounded-[8px] border-blue border-2 border-solid hover:text-white hover:bg-blue"
            >
              Subscribe
            </button>
          </form>
        </animated.div>
      </div>
    </>
  );
}

export default Subscribe;
