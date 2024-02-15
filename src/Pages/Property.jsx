import React from 'react'
import NavBar from '../Components/NavBar'
import Recommendation from '../Components/Recommendation'
import Benefits from '../Components/Benefits'
import Footer from '../Components/Footer'
import DataRecommendation from '../Components/DataRecommendation'
function Property() {
  return (
    <div>
        <NavBar />
        <Recommendation Data = {DataRecommendation} />
        <Benefits />
        <Footer />
    </div>
  )
}

export default Property