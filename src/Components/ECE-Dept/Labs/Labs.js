import React, { useState } from "react";
import "./Labs.scss";
import AboutAndVision from "../../Home-Page-Components/About-Club/About_Vision";
import { Para_1, Para_2 } from "./data";
import image_1 from "../../Images/ECE-Dept/IMG20230325145316.jpg";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md"
import {BsArrowUpShort} from "react-icons/bs"

//Labs comp

import { EDC ,BE, PDC, LDIC, ECA, DDV, AMPMC, EM, ACDC, DSP} from "./Assets/Components";




const Labs = () => {

const [show,setShow]=useState(null)
const[Lab_1,setLab_1]=useState(true)

const close=()=>{
  setShow("close")
}

  return (
    <div className="Labs-Main-Div">
      <AboutAndVision
        AboutHeading={Para_1.AboutHeading}
        About={Para_1.Paragraph_1}
        image={image_1}
        Vision={Para_2.Paragraph_2}
        VisionHeading={Para_2.VisionHeading}
        disable={true}
      />
      <h2>Laboratories & Facilities</h2>
      <div className="labs-list-container">
        <ul>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("1")}> Electronic Devices and Circuits Lab</button> <div className={show==="1"? "active":"disable"}> <EDC/><button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("2")} >  Basic Electronics Lab</button> <div className={show==="2" ? "active":"disable"}><BE/><button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button  onClick={()=>setShow("3")}> Pulse and Digital circuits lab</button> <div className={show==="3" ? "active":"disable"}> <PDC/><button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button  onClick={()=>setShow("4")}> 	Electronic Circuit Analysis lab</button> <div className={show==="4" ? "active":"disable"}> <ECA/><button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("5")}> Linear & Digital IC Applications lab</button> <div className={show==="5" ? "active":"disable"}> <LDIC/><button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("6")}> Digital Design through Verilog HDL LAB</button> <div className={show==="6" ? "active":"disable"}> <DDV/><button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("7")}> Microprocessor & Microcontroller Lab</button> <div className={show==="7" ? "active":"disable"}> <AMPMC/><button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("8")}> Embedded systems lab</button> <div className={show==="8" ? "active":"disable"}> <EM/><button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("9")}> Analog and Digital Communication Lab</button> <div className={show==="9" ? "active":"disable"}> <ACDC/><button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("10")}>Digital Signal and Image Processing Lab</button> <div className={show==="10" ? "active":"disable"}> <DSP/><button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("11")}> Microwave & Optical Fiber communication Lab</button> <div className={show==="11" ? "active":"disable"}> working<button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("12")}> VLSI Lab</button> <div className={show==="12" ? "active":"disable"}> working<button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("13")}> Project Lab</button> <div className={show==="13" ? "active":"disable"}> working<button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
         <li><MdOutlineKeyboardDoubleArrowRight/><button onClick={()=>setShow("14")}> Research Lab</button> <div className={show==="14" ? "active":"disable"}> working<button onClick={close}>Close<span><BsArrowUpShort/></span></button></div></li>
        </ul>
      </div>
    </div>
  );
};

export default Labs;
