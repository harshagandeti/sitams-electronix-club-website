import React from 'react'
import AboutAndVision from '../Home-Page-Components/About-Club/About_Vision'
import DomainSection from '../Home-Page-Components/Doamin-Section/DomainSection'
import ProjectSection from '../Home-Page-Components/Project-Section/ProjectSection'
import Testmonials from '../Home-Page-Components/TestMonials/Testmonials'
import LandingPage from '../Landing-Page/LandingPage'

 const Home = () => {
  return (
    <div>
    <LandingPage/>
    <AboutAndVision/>
    <DomainSection/>
    <Testmonials/>
    <ProjectSection/>
    </div>
  )
}

export default Home
