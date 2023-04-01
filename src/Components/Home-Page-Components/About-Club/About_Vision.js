import React, { Component, useEffect } from "react";

// Animations
// import 'aos'
import Aos from "aos";
import LandingImage from "../Images/Landing-Image/LandingImg.ecde1f8a.webp";

// Components
import SectionHeading from "../Section-Heading/SectionHeading";
// import AboutUsCard from '../AboutUsCard/AboutUsCard'
import { CircleSmall, Line } from "../Back-Ground-Objects/BackGroundObj";

import "./About_Vision.scss";

const AboutAndVision = ({image,video,About,Vision,AboutHeading,VisionHeading,disable}) => {


useEffect(()=>{
  Aos.init()
})

  return (
    <section className="about-us-section">
      <SectionHeading className="section" heading={AboutHeading} disable={disable} />
      <div className="about-us">
 
        <div data-aos="fade-right" className="video-container ">
          <img className="video" src={image}></img>
          {/* <video className='video' autoPlay loop muted>
                            <source type='video/mp4' src={vido} />
                        </video> */}
        </div>
    

        <div data-aos="fade-left" className="about-us-text ">
          <h1>{AboutHeading}</h1>
          <p>
           {About}
          </p>
        </div>
      </div>
      <div className="our-vision">
        <div data-aos="fade-right" className="our-vision-text ">
          <h1>{VisionHeading}</h1>
          <p>
           {Vision}
          </p>
        </div>

        <img
          data-aos="fade-left"
          className="image "
          src={image}
          alt="ourVision"
        />
      </div>
      <div className="our-work">
        {/* {this.state.aboutUs.works.map(data => <AboutUsCard key={data.id} label={data.label} number={data.number} />)} */}
      </div>
      <div className="circle-1">
        <CircleSmall />
      </div>
      <div className="circle-2">
        <CircleSmall />
      </div>
      <div className="line">
        <Line />
      </div>
    </section>
  );
};

export default AboutAndVision;
