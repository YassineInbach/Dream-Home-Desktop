import React from 'react'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import DataCard from '../Components/DataCard'
import Cards from '../Components/Cards'
import OurServices from '../Components/OurServices'
import Recommendation from '../Components/Recommendation'
import DataRecommendation from '../Components/DataRecommendation'
import Benefits from '../Components/Benefits'
import ReadBlog from '../Components/ReadBlog'
import AboutUs from '../Components/AboutUs'
import DataAbout from '../Components/DataAbout'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Cards card={DataCard} />
      <OurServices />
      <Recommendation Data={DataRecommendation} />
      <Benefits />
      <ReadBlog />
      <AboutUs DataAbout = {DataAbout} />
      <Footer />
    </div>
  )
}

export default Home