import React from 'react'
import {Link} from "react-router-dom"

import logo from "../Assests/logo.jpg"

function NavBar() {
  return (
    <div>
        <div className='flex items-center justify-end py-2 px-6 shadow-sm shadow-grey'>
            <div className='flex items-center mr-auto space-x-6'>
                <img className='w-[65px] h-[65px] ' src={logo} alt="" />
                <nav className='flex items-center space-x-4'>
                    <li>
                    <Link to = "/" className='text-sm font-poppins font-medium py-[5px] px-[10px] text-white bg-blue rounded-[8px]'>Home</Link>
                    </li>                    
                    <li>
                    <Link to = "/service" className='text-sm text-black font-poppins font-medium cursor-pointer py-[5px] px-[10px] rounded-[8px] hover:text-white hover:bg-blue'>Services</Link>
                    </li>                    
                    <li>
                    <Link to="/property" className='text-sm text-black font-poppins font-medium cursor-pointer py-[5px] px-[10px] rounded-[8px] hover:text-white hover:bg-blue'>Property</Link>
                    </li>
                    <li>
                    <Link to ="/blog" className='text-sm text-black font-poppins font-medium cursor-pointer py-[5px] px-[10px] rounded-[8px] hover:text-white hover:bg-blue'>Blogs</Link>
                    </li>
                    <li>
                    <Link to = "/contact" className='text-sm text-black font-poppins font-medium py-[5px] px-[10px] rounded-[8px] hover:text-white hover:bg-blue'>Contact us</Link>
                    </li>                    
                </nav>
            </div>
            <div className='space-x-3'>
                <button type="submit" className='border-2 border-solid border-blue w-[120px] h-[43px] rounded-sm text-sm font-medium text-blue transition linear ease-in duration-500 hover:bg-black hover:text-white hover:border-black'>Login</button>
                <button type='submit' className='bg-blue border-2 border-solid border-blue w-[120px] h-[43px] rounded-sm text-sm font-medium text-white transition linear ease-in duration-500 hover:bg-black hover:border-black'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar