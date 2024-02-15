import React from 'react'
import NavBar from '../Components/NavBar'
import ReadBlog from '../Components/ReadBlog'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'
import DataAbout from '../Components/DataAbout'
function Blog() {
  return (
    <div>
        <NavBar />
        <ReadBlog />
        <AboutUs DataAbout = {DataAbout}/>
        <Footer />
    </div>
  )
}

export default Blog