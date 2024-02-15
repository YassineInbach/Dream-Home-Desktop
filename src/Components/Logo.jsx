import React from 'react'
import logo from "../Assests/logo.jpg"

function Logo() {
  return (
    <div>
        <div className='flex items-center justify-center h-[100vh] bg-black animate-logo '>
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Logo