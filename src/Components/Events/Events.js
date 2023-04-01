import React, { useState } from "react";
import SectionHeading from "../Section-Heading/SectionHeading";
import "./Events.scss";
import { MdPlace } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { BsDoorOpen } from "react-icons/bs";
import data from "./data"

const Events = (props) => {

  const [show, setShow] = useState(false);
const [eventsData,setEventsData]=useState(data)
// console.log(eventsData)


// card color 
// const [cardColor,setCardColor]=useState("orange")



  return (
    <div className="Events-Main-Div">
      <SectionHeading heading="Upcoming-Events" />
      <div className="Events-section">
      {eventsData && eventsData.map((event,index)=>{ 
        return(

        <div key={event.id} className={"Event-card "+(event.cardColor ==="red" ? "red":event.cardColor==="blue"? "blue":event.cardColor==="green" ? "green":event.cardColor==="purple-dark"?"purple-dark":event.cardColor==="pink-blue"?"pink-blue":event.cardColor==="blue-dark"? "blue-dark":event.cardColor==="maroon"? "maroon":event.cardColor==="orange"? "orange":"")}>
          <div className="Event-date">
          <h5>Date:</h5>
            <span>{event.month}</span>
            <h1>{event.date}</h1>
          </div>
          <div className="box">
            <div className="box-content">
              <h4 className="title">
               { event.name}
              </h4>
              <div className="content-below">
                <div>
                  <IoMdTimer color="black" />
                  <p>Time :</p> {event.time}
                </div>
                <div>
                  <BsDoorOpen color="black"/>
                  <p>Room :</p> {event.room}
                </div>
                <div>
                  <MdPlace color="black"/> <p>Venue:</p> {event.venue}
                </div>
              </div>
            </div>
            <div className="box-button">
              <a
                href={event.register_link}
                target="_balnk"
                className={"btn-1  "+(event.cardColor ==="red" ? "red":event.cardColor==="blue"? "blue":event.cardColor==="green" ? "green":event.cardColor==="purple-dark"?"purple-dark":event.cardColor==="pink-blue"?"pink-blue":event.cardColor==="blue-dark"? "blue-dark":event.cardColor==="maroon"? "maroon":event.cardColor==="orange"? "orange":"")}
              >
                Register
              </a>
              {/* <button className="btn-2" onClick={() => setShow(true)}>
                More
              </button> */}
            </div>
          </div>
        </div>
      )})}
        {/* <div className={show ? "Active" : "disable"}>
          <button onClick={() => setShow(false)}>Less</button>
        </div> */}
      </div>
    </div>
  );
};

export default Events;
