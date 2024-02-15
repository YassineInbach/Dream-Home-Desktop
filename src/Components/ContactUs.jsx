import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useSpring, animated } from 'react-spring';

function ContactUs() {

  const title = useSpring({
    opacity : 1 ,
    transform : 'translateX(0)',
    from : {
      translate: 'translateX(20px)',
      opacity : 0,
    },
    delay : 500,
  })
  const forms = useSpring({
    opacity : 1 ,
    transform : 'translateY(0)',
    from : {
      translate: 'translateY(20px)',
      opacity : 0,
    },
    delay : 700,
  })
  const button = useSpring({
    opacity : 1 ,
    transform : 'translateY(0)',
    from : {
      translate: 'translateY(20px)',
      opacity : 0,
    },
    delay : 850,
  })

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="pt-5 pb-3 w-[70%] ">
          <animated.h1 style = {title} className="text-xl font-bold tracking-wide pb-4">
            Love to hear from you, Get in touch <span>👋</span>
          </animated.h1>
          <animated.form style = {forms} action="">
            <div>
              <div className="flex gap-x-[2em]">
                <div className="flex flex-col gap-y-[7px] w-[430px]">
                  <label htmlFor="" className="text-[15px] font-semibold" for="name"> 
                    Your Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Enter your Name"
                    className="text-[14px] font-normal placeholder:text-[13px] placeholder:text-black px-2 py-[8px]  bg-[#EEEDED] transition duration-300 ease-in-out outline-none focus:outline-black"
                  />
                </div>
                <div className="flex flex-col gap-y-[7px] w-[430px]">
                  <label htmlFor="" className="text-[15px] font-semibold" for="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name=""
                    id="email"
                    placeholder="Enter your email "
                    className="text-[14px] font-normal placeholder:text-[13px] placeholder:text-black px-2 py-[8px]  bg-[#EEEDED] transition duration-300 ease-in-out outline-none focus:outline-black"
                  />
                </div>
              </div>
              <div div className="flex gap-x-[2em] pt-3">
                <div className="flex flex-col gap-y-[7px] w-[430px]">
                  <label htmlFor="" className="text-[15px] font-semibold" for="country">
                    Country
                  </label>
                  <input
                    type="text"
                    name=""
                    id="country"
                    placeholder="Enter your country"
                    className="text-[14px] font-normal placeholder:text-[13px] placeholder:text-black px-2 py-[8px]  bg-[#EEEDED] transition duration-300 ease-in-out outline-none focus:outline-black"
                  />
                </div>
                <div className="flex flex-col gap-y-[7px] w-[430px]">
                  <label htmlFor="" className="text-[15px] font-semibold" for="number">
                    Number
                  </label>
                  <input
                    type="number"
                    name=""
                    id="number"
                    placeholder="Enter your Number"
                    className="text-[14px] font-normal placeholder:text-[13px] placeholder:text-black px-2 py-[8px]  bg-[#EEEDED] transition duration-300 ease-in-out outline-none focus:outline-black"
                  />
                </div>
              </div>
              <div className="pt-3 flex flex-col gap-y-[7px] w-[100%]">
                <label htmlFor="" className="text-[15px] font-semibold" for="message">
                  Message
                </label>
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your message..."
                  className="text-[14px] font-normal placeholder:text-[13px] placeholder:text-black px-2 py-[8px]  bg-[#EEEDED] transition duration-300 ease-in-out outline-none focus:outline-black h-[110px] resize-none"
                ></textarea>
              </div>
            </div>
          </animated.form>
          <animated.button style = {button}
            type="button"
            className="text-white text-sm font-bold tracking-wide  mt-3 inline-flex items-center gap-x-[8px] bg-black py-[7px] px-[15px] hover:bg-blue duration-700 "
          >
            Just Send <FaArrowTrendUp />{" "}
          </animated.button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
