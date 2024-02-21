import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assests/logo.jpg";

function NavBar() {
    const location = useLocation();
    const handleCheck = () => {
        console.log("check the pathname : ", location.pathname);
    };
    return (
        <div>
            <div className="flex items-center justify-end py-2 px-6 shadow-sm shadow-grey">
                <div className="flex items-center mr-auto space-x-6">
                    <img className="w-[65px] h-[65px]" src={logo} alt="" />
                    <nav className="flex items-center space-x-4">
                        <li>
                            <Link
                                to="/"
                                className={`text-sm font-poppins font-medium py-[5px] px-[10px] ${location.pathname === "/"
                                        ? "bg-blue text-white rounded-[8px]"
                                        : ""
                                    }`}
                                onClick={handleCheck}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/service"
                                className={`text-sm font-poppins font-medium py-[5px] px-[10px] ${location.pathname === "/service"
                                        ? "bg-blue text-white rounded-[8px]"
                                        : ""
                                    }`}
                                onClick={handleCheck}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/property"
                                className={`text-sm font-poppins font-medium py-[5px] px-[10px] ${location.pathname === "/property"
                                        ? "bg-blue text-white rounded-[8px]"
                                        : ""
                                    }`}
                                onClick={handleCheck}
                            >
                                Property
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className={`text-sm font-poppins font-medium py-[5px] px-[10px] ${location.pathname === "/blog"
                                        ? "bg-blue text-white rounded-[8px]"
                                        : ""
                                    }`}
                                onClick={handleCheck}
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`text-sm font-poppins font-medium py-[5px] px-[10px] ${location.pathname === "/contact"
                                        ? "bg-blue text-white rounded-[8px]"
                                        : ""
                                    }`}
                                onClick={handleCheck}
                            >
                                Contact us
                            </Link>
                        </li>
                    </nav>
                </div>
                <div className="space-x-3">
                    <button
                        type="submit"
                        className="border-2 border-solid border-blue w-[120px] h-[43px] rounded-sm text-sm font-medium text-blue transition linear ease-in duration-500 hover:bg-black hover:text-white hover:border-black"
                    >
                        Login
                    </button>
                    <button
                        type="submit"
                        className="bg-blue border-2 border-solid border-blue w-[120px] h-[43px] rounded-sm text-sm font-medium text-white transition linear ease-in duration-500 hover:bg-black hover:border-black"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
