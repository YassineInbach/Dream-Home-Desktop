import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Recommendation({ Data }) {
  const [ref, inView] = useInView();
  const [show, setShow] = useState(false);

  const title1 = useSpring({
    opacity: show ? 1 : 0,
    delay: 1000,
  });
  const title2 = useSpring({
    opacity: show ? 1 : 0,
    delay: 1100,
  });
  const animateCard = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-10px)" },
    delay: 1300,
  });
  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  const CustomDot = ({ onClick }) => (
    <span
    style={{
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      backgroundColor: "#f7f7f7",
      border: "1.5px solid black",
      display: "inline-block",
      cursor: "pointer",
      transition: "background-color 0.3s", // Ajout de la transition pour une animation fluide
    }}
    onClick={onClick}
    onMouseDown={(e) => {
      e.target.style.backgroundColor = "black";  // Changement de couleur de fond au survol
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#fafafa"; // Changement de couleur de fond au survol
    }}
  />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    slidesToScinitialSlide: 0,
    customPaging: (i) => <CustomDot />,
    responsive: [
      {
        breakpoint: 900, // Breakpoint for medium-sized screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Breakpoint for medium-sized screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="font-poppins">
        <section ref={ref} className="px-7 py-6   pb-2">
          <div className="flex items-center justify-between">
            <animated.h2
              style={title1}
              className="text-black text-xl font-bold tracking-wide"
            >
              Best recommendation
            </animated.h2>
            <animated.div style={title2} className="flex items-center gap-x-1">
              <h3 className="text-blue text-sm font-normal ">Explore All</h3>
              <FaLongArrowAltRight className="text-lg text-blue" />
            </animated.div>
          </div>
          <Slider className="pt-5 " {...settings}>
            {Data.map((value, id) => (
              <div>
                <animated.div
                  key={id}
                  style={animateCard}
                  className="w-[90%] box shadow-sm shadow-black rounded-tl-sm rounded-tr-sm "
                >
                  <div className="overflow-hidden rounded-tr-sm rounded-tl-sm cursor-pointer">
                    <img
                      className="w-full h-[200px] object-fill hover:scale-[1.1]"
                      src={value.img}
                      alt=""
                    />
                  </div>
                  <div className="p-2 max-w-full bg-[#fdfdfd]">
                    <div className="pb-2 flex items-center gap-x-[4px]">
                      <MdLocationOn className="text-blue text-lg" />
                      <p className="text-black text-[16px] font-bold tracking-wide">
                        {value.country}
                      </p>
                    </div>
                    <div className="pb-2 flex items-center justify-between ">
                      <div className="flex items-center gap-x-1">
                        <FaBed className="text-sm text-blue" />
                        <p className="text-[#444444] text-[15px] font-semibold">
                          {value.t1}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <RxDimensions className="text-sm text-blue" />
                        <p className="text-[#444444] text-[15px] font-semibold">
                          {value.t2}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <IoMdHome className="text-sm text-blue" />
                        <p className="text-[#444444] text-[15px] font-semibold">
                          {value.t3}
                        </p>
                      </div>
                    </div>
                    <div className="pt-1 flex items-center justify-between">
                      <button className="bg-blue w-[90px] h-[30px] text-[14px] font-medium text-white hover:bg-black hover:text-white hover:border-black">
                        Book now
                      </button>
                      <p className="text-[#444444] text-[15px] font-semibold tracking-wide">
                        {value.price}
                      </p>
                    </div>
                  </div>
                </animated.div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </>
  );
}

export default Recommendation;
