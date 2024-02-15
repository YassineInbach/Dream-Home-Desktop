import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../Assests/Rectangle 25.png";
import Ellipse1 from "../Assests/Ellipse 5.png";
import Ellipse2 from "../Assests/Ellipse 6.png";
import Ellipse3 from "../Assests/Ellipse 7.png";
import Ellipse4 from "../Assests/Ellipse 8.png";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Benefits() {
  const [ref, inView] = useInView();
  const [show, setShow] = useState(false);
  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(-20px)",
    delay: 1600,
  });
  const groups = useSpring({
    opacity: show ? 1 : 0,
    delay: 1700,
  });

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <>
      <div className="font-poppins">
        <section
          ref={ref}
          className="flex items-center justify-between gap-x-1 space-x-1 pt-7 pb-2 px-7 "
        >
          <animated.div style={props} className="max-w-[510px]">
            <h3 className="pb-4 text-blue text-sm font-medium tracking-wide">
              Benefits
            </h3>
            <h1 className="pb-2 text-black text-xl font-bold tracking-wide leading-10 ">
              Why choose us
            </h1>
            <p className="pb-5 text-[16px] font-normal text-black ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae.
            </p>
            <div className="pb-1 flex items-center space-x-1">
              <FaStar className="text-blue" />
              <p className="text-black text-[15px] font-semibold">
                Trusted Developer
              </p>
            </div>
            <div className="pb-1 flex items-center space-x-1">
              <FaStar className="text-blue" />
              <p className="text-black text-[15px] font-semibold">
                Outstanding properties
              </p>
            </div>
            <div className="pb-1 flex items-center space-x-1">
              <FaStar className="text-blue" />
              <p className="text-black text-[15px] font-semibold">
                A safe and trustworthy
              </p>
            </div>
            <div className="pb-1 flex items-center space-x-1">
              <FaStar className="text-blue" />
              <p className="text-black text-[15px] font-semibold">
                Buy with Confidence
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <FaStar className="text-blue" />
              <p className="text-black text-[15px] font-semibold">
                Markert Leading research
              </p>
            </div>
          </animated.div>
          <animated.div
            style={groups}
            className="bg-Benefits-bg w-[250px] h-[320px]"
          >
            <div className="relative w-[330px] h-[300px] top-[20px] right-[120px] ">
              <img className="absolute " src={img1} alt="" />
              <div className="absolute w-full bottom-0 flex items-center justify-end bg-black bg-opacity-70 p-2 pr-3 rounded-lg  ">
                <div className="space-y-1 mr-auto  ">
                  <p className="text-white text-[14px] font-semibold">
                    100+Employee
                  </p>
                  <div className="flex items-center gap-x-1 ">
                    <FaStar className="text-white text-sm font-normal" />
                    <p className="text-white text-xs">(39.9k reviews)</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="w-[40px] h-[40px] mr-[-12px]"
                    src={Ellipse1}
                    alt=""
                  />
                  <img
                    className="w-[40px] h-[40px] mr-[-12px]"
                    src={Ellipse2}
                    alt=""
                  />
                  <img
                    className="w-[40px] h-[40px] mr-[-12px]"
                    src={Ellipse3}
                    alt=""
                  />
                  <img
                    className="w-[40px] h-[40px] mr-[-12px]"
                    src={Ellipse4}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </animated.div>
        </section>
      </div>
    </>
  );
}

export default Benefits;
