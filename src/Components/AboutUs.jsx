import React, { useId, useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-spring";

function AboutUs({ DataAbout }) {
  const [ref, inView] = useInView();
  const [show, setShow] = useState(false);

  // Animation pour les éléments à afficher
  const background = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(-20px)",
    delay: 500,
  });
  const title = useSpring({
    opacity: show ? 1 : 0,
    delay: 1000,
  });

  const data = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateX(0)" : "translateX(20px)",
    delay: 2000,
  });
  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  var id = useId();
  console.log("from id : ", id);
  return (
    <>
      <div ref={ref} className="py-5 px-7 font-poppins">
        <animated.section
          style={background}
          className="relative bg-About-bg bg-center bg-cover h-[500px] pt-7"
        >
          <animated.div style={title} className="max-w-[600px] pl-7">
            <h2 className="text-2xl text-white font-semibold tracking-wider leading-[1.4em]">
              See what our customers said about us
            </h2>
          </animated.div>
          <div className="absolute w-full bottom-[-2.5em] flex justify-between gap-x-2">
            {DataAbout.map((value, index) => (
              <animated.div
                style={data}
                key={index}
                className="bg-white py-3 pl-5 pr-2 w-[360px] shadow-md shadow-black rounded-[5px]"
              >
                <div className="flex items-center gap-x-2">
                  <img src={value.img} alt="" className="w-[50px] h-[50px]" />
                  <div>
                    <h3 className="font-semibold tracking-wide">
                      {value.name}
                    </h3>
                    <p className="text-xs font-normal text-[#444444] tracking-wide">
                      {value.describe}
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-black text-xs font-normal pb-2 ">
                    {value.para}
                  </p>
                  <p className="text-xs text-black font-semibold">
                    Date : {value.date}
                  </p>
                </div>
              </animated.div>
            ))}
          </div>
        </animated.section>
      </div>
    </>
  );
}

export default AboutUs;
