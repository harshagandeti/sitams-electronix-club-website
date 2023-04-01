import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { BsDoorOpen } from "react-icons/bs";
import {MdOutlineDateRange} from "react-icons/md"
import data from "../../Events/data";
import "./Ticker.scss";

function Testmonials() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="ticker">
      <div className="left-ticker">
        <span>Upcoming events</span>
      </div>
      <div className="sectionCenter-ticker">
        {people.map((person, personIndex) => {
          const { id, name, date, time, room, venue,register_link } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <div className="top-right-ticker">
              <div>
                  <MdOutlineDateRange color="rgb(0, 145, 255)" /> <span>Date:</span> {date}
                </div>
                <div>
                  <IoMdTimer color="rgb(0, 145, 255)" />
                  <span>Time :</span> {time}
                </div>
                <div id="room">
                  <BsDoorOpen color="rgb(0, 145, 255)" />
                  <span>Room : </span> {room}
                </div>
              
              </div>
              <div className="bottom-right-ticker">{name}</div>
              <a href={register_link} target="blank">Register Now</a>
            </article>
          );
        })}
        <button className="prev-Btnn" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-Btnn" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Testmonials;
