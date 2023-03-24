import React from 'react'
import AboutAndVision from '../../Home-Page-Components/About-Club/About_Vision'
import LandingImage from '../../Images/Landing-Image/LandingImg.ecde1f8a.webp'

import { About,Vision } from './data'

const AboutDept = () => {
  const about=About
  const vision=Vision
  const{VisonParagraph,VisionHeading}=vision
  const{AboutParagraph,AboutHeading}=about
  return (
    <div className='About-ECE'><AboutAndVision AboutHeading={AboutHeading} About={AboutParagraph} image={LandingImage} Vision={VisonParagraph} VisionHeading ={VisionHeading} disable={true}/></div>
  )
}

export default AboutDept