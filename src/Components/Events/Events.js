import React, { useEffect, useState } from "react";
import SectionHeading from "../Section-Heading/SectionHeading";
import "./Events.scss";
import { MdPlace } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { BsDoorOpen } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

// firebase config &libraries
import { db } from "../Api/Config";
import { collection, getDocs, deleteDoc, doc,} from "firebase/firestore";

const Events = (props) => {
  const [show, setShow] = useState(true);
  const [eventsData, setEventsData] = useState();
  const [cardColor, setColor] = useState("");
  const [index, setindex] = useState("");
  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventSnapshot = await getDocs(collection(db, "NewEvents"));
        const filterData = eventSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
          setindex(filterData.length)
        setEventsData(filterData);

      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    getRandomColor();
    getEvents();
  }, []);
  const getRandomColor = () => {
    const arr = [
      "red",
      "blue",
      "green",
      "orange",
      "purple-dark",
      "maroon",
      "blue-dark",
    ];
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    setColor(item);
    return item;
  };
  const deleteHandler = (ID) => {

    const eventDoc = doc(db, "NewEvents",ID);
   
  };

  return (
    <div className="Events-Main-Div">
      <SectionHeading heading="Upcoming-Events" />
      <div className="Events-section">
        {index>0 ? (
          eventsData.map((eventEach,) => {
            console.log("event-data",eventsData.length)
            const { event,id } = eventEach;
            return (
              <div
                key={id}
                className={
                  "Event-card " +
                  (eventEach.cardColor === "red"
                    ? "red"
                    : eventEach.cardColor === "blue"
                    ? "blue"
                    : eventEach.cardColor === "green"
                    ? "green"
                    : eventEach.cardColor === "purple-dark"
                    ? "purple-dark"
                    : eventEach.cardColor === "blue-dark"
                    ? "blue-dark"
                    : eventEach.cardColor === "maroon"
                    ? "maroon"
                    : eventEach.cardColor === "orange"
                    ? "orange"
                    : "red")
                }
              >
                <div className="Event-date">
                  <h5>Date:</h5>
                  <span>{event.month}</span>
                  <h1>{event.day}</h1>
                </div>
                <div className="box">
                  <div className="box-content">
                    <h4 className="title">{event.name}</h4>
                    <div className="content-below">
                      <div>
                        <IoMdTimer color="black" />
                        <p>Time :</p> {event.time}
                      </div>
                      <div>
                        <BsDoorOpen color="black" />
                        <p>Room :</p> {event.room}
                      </div>
                      <div>
                        <MdPlace color="black" /> <p>Venue:</p> {event.block}
                      </div>
                    </div>
                  </div>
                  <div className="box-button">
                    <a
                      href={event.register_link}
                      target="_balnk"
                      className={
                        "btn-1  " +
                        (eventEach.cardColor === "red"
                          ? "red"
                          : eventEach.cardColor === "blue"
                          ? "blue"
                          : eventEach.cardColor === "green"
                          ? "green"
                          : eventEach.cardColor === "purple-dark"
                          ? "purple-dark"
                          : eventEach.cardColor === "pink-blue"
                          ? "pink-blue"
                          : eventEach.cardColor === "blue-dark"
                          ? "blue-dark"
                          : eventEach.cardColor === "maroon"
                          ? "maroon"
                          : eventEach.cardColor === "orange"
                          ? "orange"
                          : "red")
                      }
                    >
                      Register Now
                    </a>
                  </div>
                 
                  <button
                      onClick={()=>{
                       deleteHandler()
                      }}
                      className={show ? "active" : "disable"}
                    >
                      <MdDeleteForever />
                    </button>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No Upcoming Events</h2>
        )}
      </div>
    </div>
  );
};

export default Events;
