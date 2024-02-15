import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import img2 from "../Assests/Rectangle 15.png";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function OurServices() {
  const [ref, inView] = useInView();
  const [show, setShow] = useState(false);

  // Animation pour les éléments à afficher
  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(-20px)",
    delay: 700,
  });
  const img1 = useSpring({
    opacity: show ? 1 : 0,
    delay: 900,
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
          className="flex items-center justify-between gap-x-1 space-x-1 pt-5 pb-2 px-7 "
        >
          <animated.div style={props} className="max-w-[510px]">
            <h3 className="pb-4 text-blue text-sm font-medium tracking-wide">
              Our Services
            </h3>
            <h1 className="pb-2 text-black text-xl font-bold tracking-wide leading-10 ">
              We’re Here To Help You To Find Your Dream House.
            </h1>
            <p className="pb-5 text-[16px] font-normal text-black ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae.
            </p>
            <div className="pb-1 flex items-center space-x-1">
              <FaStar className="text-blue" />
              <p className="text-black text-[15px] font-semibold">
                Property management
              </p>
            </div>
            <div className="pb-1 flex items-center space-x-1">
              <FaStar className="text-blue" />
              <p className="text-black text-[15px] font-semibold">
                Construction Services
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <FaStar className="text-blue" />
              <p className="text-black text-[15px] font-semibold">
                Online Services
              </p>
            </div>
          </animated.div>
          <animated.div
            style={img1}
            className="bg-Our-bg bg-cover w-[340px] h-[320px] shadow-sm"
          >
            <div className="relative">
              <img
                className="absolute top-6 right-7 w-[340px] h-[320px] object-fill"
                src={img2}
                alt=""
              />
            </div>
          </animated.div>
        </section>
      </div>
    </>
  );
}

export default OurServices;
