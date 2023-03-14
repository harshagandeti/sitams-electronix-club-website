import React, { Component } from "react";

// Animations
// import 'aos'

import LandingImage from "../Images/Landing-Image/LandingImg.ecde1f8a.webp";

// Components
import SectionHeading from "../Section-Heading/SectionHeading";
// import AboutUsCard from '../AboutUsCard/AboutUsCard'
import { CircleSmall, Line } from "../Back-Ground-Objects/BackGroundObj";




import "./About_Vision.scss";

const AboutAndVision = () => {
  return (
    <section className="about-us-section">
      <SectionHeading className="section" heading="About The Club" />
      <div className="about-us">
        {/* <AnimatedOnScroll animationIn="fadeLeft"> */}
        <div data-aos="fade-right" className="video-container">
          <img className="video" src={LandingImage}></img>
          {/* <video className='video' autoPlay loop muted>
                            <source type='video/mp4' src={vido} />
                        </video> */}
        </div>
        {/* </AnimatedOnScroll> */}

        <div data-aos="fade-left" className="about-us-text">
          <h1>About The Club</h1>
          <p>
            We are a vibrant, caring group of people who share a love of
            technology and practical education. Our primary goal is to give
            members a platform to explore their technological aptitudes and
            passions, whether they are for coding, electronics, or robotics with
            difficult tasks, instructive talks given by professionals in the
            field, and chances for teamwork. These club are the ideal setting
            for people to develop their technical skills, as well as obtain
            useful experience and form enduring relationships. Our community is
            committed to supporting each other and creating and welcoming
            atmosphere where everyone may learn and flourish. Therefore, if
            you're seeking for a place to explore your technological potential,
            sign up for our club today and become a member of a group that is
            dedicated to learning, growth and excellence!
          </p>
        </div>
      </div>
      <div className="our-vision">
        <div data-aos="fade-right" className="our-vision-text">
          <h1> Vision Of The Club </h1>
          <p>
            Our mission is to develop a community of well-rounded engineers and
            to help each member realise their full technological potential. We
            are committed to closing the knowledge gap between theory and
            practise by giving our members a vibrant environment in which to put
            their abilities to use and broaden their horizons. Our educational
            programmes put a strong emphasis on experiential learning and expose
            participants to cutting-edge technology in an effort to provide
            participants the knowledge and abilities they need to succeed in the
            workplace. A supportive community and teamwork are also very
            important to us since we understand the connection between
            individual accomplishment and the success of the team as a whole.
            Join our club to become a part of a forward-thinking group that is
            committed to excellence, learning, and growth.
          </p>
        </div>

        <img
          data-aos="fade-left"
          className="image"
          src={LandingImage}
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
