import React from 'react'
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaAppStore } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Subscribe from './Subscribe';



function Footer() {
  return (
    <div className='font-poppins'>
      <div className='relative '>
      <Subscribe />
      </div>
        <footer className='mt-[11em] px-7 pb-6 pt-8 bg-[#4C67FF]'>
          <div className='flex items-start justify-end gap-x-2'>
          <div className='max-w-[240px] mr-auto'>
              <h2 className='text-white text-base font-semibold tracking-wide pb-2'>Real estat website</h2>
              <p className='text-white  text-[14px] font-normal leading-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi</p>
            </div>
            <div className='flex items-start gap-x-10 '>
              <div className='max-w-[130px]'>
                <h3 className='text-white  font-semibold tracking-wide'>Company</h3>
                <nav className='pt-2'>
                  <ul className='space-y-[4px]'>
                    <li className='text-white  text-[13px]'>About us</li>
                    <li className='text-white  text-[13px]'>Why choose us</li>
                    <li className='text-white  text-[13px]'>Testimonial</li>
                  </ul>
                </nav>
              </div>
              <div className='max-w-[130px]'>
                <h3  className='text-white  font-semibold tracking-wide'>Ressources</h3>
                <nav className='pt-2'>
                  <ul className='space-y-[4px]'>
                    <li  className='text-white  text-[13px]'>Privacy Policy</li>
                    <li  className='text-white  text-[13px]'>Terms & Condition</li>
                    <li  className='text-white  text-[13px]'>Contact us</li>
                  </ul>
                </nav>
              </div>
              <div className='max-w-[100px]'>
                <h3  className='text-white  font-semibold tracking-wide'>Follow us</h3>
                <nav className='pt-2'>
                  <ul>
                    <li  className='text-white  text-[13px] inline-flex items-center gap-x-[3px]'><AiOutlineYoutube className='text-sm'/> Youtube</li>
                    <li  className='text-white  text-[13px] inline-flex items-center gap-x-[3px]'><FaInstagram className='text-sm' /> Instagram</li>
                    <li  className='text-white  text-[13px] inline-flex items-center gap-x-[3px]'><CiFacebook className='text-sm' /> Facebook</li>
                  </ul>
                </nav>
              </div>
              <div className='max-w-[130px]'>
                <h3  className='text-white  font-semibold tracking-wide'>Find us</h3>
                <div className='pt-2 space-y-2'>
                  <button type="button" className='text-white inline-flex items-center justify-start gap-x-[6px] text-xs bg-black py-[7px] px-[10px] w-[120px] rounded-sm'><FaGooglePlay className='text-[13px]' />Google Play</button>
                  <button type="button" className='text-white inline-flex items-center justify-start gap-x-[6px] text-xs bg-black py-[7px] px-[10px] rounded-sm w-[120px]'><FaAppStore  className='text-[13px]'/>App Store</button>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className='py-2 text-center'>
            <p className='text-[14px] font-semibold tracking-wide'>© 2024 - Made with ❤️ by <span className='font-normal text-blue hover:text-red-700 hover:underline'><a  href= "https://github.com/YassineInbach" target="_blank">Yassine Inbach</a></span></p>
        </div>
    </div>
  )
}

export default Footer