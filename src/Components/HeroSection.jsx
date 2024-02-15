import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

function HeroSection() {
  const backgroundProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });

  // Animation pour afficher les informations
  const infoProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    delay: 450, // Ajouter un délai pour que le fond d'écran apparaisse d'abord
  });

  return (
    <>
      <animated.div
        style={backgroundProps}
        className="bg-hero-section bg-left bg-repeat-round bg-top bg-cover"
      >
        <animated.div style={infoProps} className="px-7 pt-7 pb-8">
          <h1 className="text-white text-2xl font-poppins font-semibold leading-none pb-4">
            Find your next dream home
          </h1>
          <p className="text-white text-sm font-poppins font-normal max-w-[655px] leading-7 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae.
          </p>
          <div className="bg-white shadow-sm shadow-black w-fit py-3 px-4 rounded-sm">
            <div className="flex items-center space-x-5">
              <div>
                <label htmlFor="" className="text-base text-black font-bold">
                  Choix :{" "}
                </label>
                <select name="" id="">
                  <option value=""></option>
                  <option
                    value="Maroc"
                    selected
                    className=" text-sm font-poppins font-normal"
                  >
                    Maroc
                  </option>
                  <option
                    value="Espagne"
                    className="text-sm font-poppins font-normal"
                  >
                    Espagne
                  </option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <FaSearch className="text-xs" />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search by location... "
                  className="placeholder:text-[13px]"
                />
              </div>
              <button
                type="submit"
                className="bg-blue border-2 border-solid border-blue w-[120px] h-[43px] rounded-sm text-sm font-medium text-white hover:bg-black hover:border-none"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-7 pt-5">
            <div className="flex items-center">
              <input type="checkbox" name="" id="2" />
              <label className="text-white text-xs pl-1" For="2">
                Only Properties in exclusive representation
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="" id="1" />
              <label className="text-white text-xs pl-1" For="1">
                Only new developpment
              </label>
            </div>
          </div>
        </animated.div>
      </animated.div>
    </>
  );
}

export default HeroSection;
