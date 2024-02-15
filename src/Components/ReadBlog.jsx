import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../Assests/Rectangle 27.png";
import img2 from "../Assests/Rectangle 30.png";
import img3 from "../Assests/Rectangle 28.png";
import img4 from "../Assests/Rectangle 29.png";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-spring";

function ReadBlog() {
  const [ref, inView] = useInView();
  const [show, setShow] = useState(false);

  const title1 = useSpring({
    opacity: show ? 1 : 0,
    delay: 700,
  });
  const title2 = useSpring({
    opacity: show ? 1 : 0,
    delay: 900,
  });
  const StyleImage1 = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-10px)" },
    delay: 1300,
  });
  const StyleImage2 = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-10px)" },
    delay: 1400,
  });
  const StyleImage3 = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-10px)" },
    delay: 1500,
  });
  const StyleImage4 = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-10px)" },
    delay: 1600,
  });
  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <>
      <div className="font-poppins">
        <section ref={ref} className="pt-5 px-7 pb-2">
          <div className="flex items-center justify-between">
            <animated.h2
              style={title1}
              className="text-black text-xl font-bold tracking-wide"
            >
              See our latest news & read blog
            </animated.h2>
            <animated.div style={title2} className="flex items-center gap-x-1">
              <h3 className="text-blue text-sm font-normal ">Explore All</h3>
              <FaLongArrowAltRight className="text-lg text-blue" />
            </animated.div>
          </div>
          <div className="py-4 flex items-start gap-x-2">
            <animated.img
              style={StyleImage1}
              className="w-[400px] h-[408px] object-fill"
              src={img1}
              alt=""
            />
            <div className="space-y-1">
              <animated.img
                style={StyleImage2}
                className="w-full object-fill h-[200px]"
                src={img2}
                alt=""
              />
              <animated.img
                style={StyleImage3}
                className="h-[200px]"
                src={img3}
                alt=""
              />
            </div>
            <animated.img
              style={StyleImage4}
              className="w-[400px] h-[408px] object-fill"
              src={img4}
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default ReadBlog;
