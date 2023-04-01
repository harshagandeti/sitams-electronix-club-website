import React from "react";
import "./Style.scss";
import EDC_img from "../../../Images/ECE-Dept/IMG20230325145316.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

// Equipments
import {
  CRO,
  RPS,
  FG,
  FXRps,
  MultiSim,
  SD_RPS,
  Computer,
  Xilinks,
  MPKit,
  TB_Kly,
  Digital_CRO,
  Spectrum,
  ACDC_lit,
  DSP_kit,
  MatLab,
} from "./Equipments";

export const EDC = () => {
  return (
    <div className="lab-comp">
      <h2>Electronic Devices and Circuits Lab</h2>
      <h3> About the laboratory </h3>
      <div className="flex-1">
        <div className="img-div">
          <img src={EDC_img}></img>
        </div>
        <div className="content-div">
          {" "}
          <p>
            This laboratory is well equipped with equipment and instruments
            required to give hands-on training to students with fundamental
            concepts of Electronic Devices and Circuits lab experience. Manual
            covers those practical oriented electronic circuits that are very
            essential for the students to solidify their theoretical concepts.
            This lab provides a communication bridge between the theory and
            practical world of the electronic circuits. The knowledge of these
            practices are essential for the engineering students. The
            experiments are related to Diode characteristics, Rectifier
            parameters, Bipolar Junction Transistor based characteristics are
            performed in this lab with different configurations of BJT, Field
            Effect Transistor (FET), UJT, and SCR characteristics.
          </p>
        </div>
      </div>

      <h3>Important Equipments</h3>
      <div className="flex-2">
        {" "}
        <CRO />
        <RPS />
        <FG />
      </div>
    </div>
  );
};
export const BE = () => {
  return (
    <div className="lab-comp">
      <h2>Basic ELectric Lab</h2>
      <h3> About the laboratory </h3>
      <div className="flex-1">
        <div className="content-div">
          {" "}
          <p>
            Electronic Devices and Circuits Laboratory Manual covers those
            practical oriented electronic circuits that are very essential for
            the students to solidify their theoretical concepts. This lab
            provides a communication bridge between the theory and practical
            world of the electronic circuits. The knowledge of these practical
            is very essential for the engineering students. The experiments
            related to Diode characteristics, Rectifier parameters, Bipolar
            Junction Transistor based characteristics with different
            configurations of BJT.
          </p>
        </div>
        <div className="img-div">
          <img src={EDC_img}></img>
        </div>
      </div>

      <h3>Important Equipments</h3>
      <div className="flex-2">
        {" "}
        <CRO />
        <RPS />
        <FG />
      </div>
    </div>
  );
};
export const PDC = () => {
  return (
    <div className="lab-comp">
      <h2>PULSE AND DIGITAL CIRCUITS LAB</h2>
      <h3> About the laboratory </h3>
      <div className="flex-1">
        <div className="img-div">
          <img src={EDC_img}></img>
        </div>
        <div className="content-div">
          {" "}
          <p>
            Pulse and digital circuits lab is a specialized laboratory designed
            for students studying electronics and communication engineering. The
            lab is equipped with various digital and pulse circuits components
            and instruments like oscilloscopes, logic analyzers, function
            generators, and digital multimeters. In this lab, students learn how
            to design, simulate, and implement digital and pulse circuits using
            various components like flip-flops, shift registers, counters,
            multiplexers, and demultiplexers. They also learn how to use
            different electronic devices like diodes, transistors, and ICs to
            build various digital circuits. The lab provides hands-on experience
            in designing and troubleshooting digital circuits, which is
            essential for understanding the functioning of digital systems used
            in modern-day electronic devices.
          </p>
        </div>
      </div>

      <h3>Important Equipments</h3>
      <div className="flex-2">
        {" "}
        <CRO />
        <RPS />
        <FG />
      </div>
    </div>
  );
};

export const ECA = () => {
  return (
    <div className="lab-comp">
      <h2> Electronic Circuit Analysis Lab</h2>
      <h3> About the laboratory </h3>
      <div className="flex-1">
        <div className="content-div">
          {" "}
          <p>
            It provides a first experience in design, simulation, analysis, and
            test of electronic circuits using MULTISIM. This laboratory is well
            equipped with equipments and instruments required to give hands-on
            training to students with fundamental concepts of Electronic
            Circuits for lab experience. Transient analysis and frequency
            response of Single and Multistage BJT and FET Amplifier. Study of
            operation of Oscillators and frequency response of Tuned and
            Feedback Amplifier. Application of simulation tools (PSPICE or
            Multisim) to understand the circuit characteristics
          </p>
        </div>
        <div className="img-div">
          <img src={EDC_img}></img>
        </div>
      </div>

      <h3>Important Equipments</h3>
      <div className="flex-2 wrap">
        {" "}
        <MultiSim />
        <SD_RPS />
        <Computer />
        <CRO />
        <RPS />
      </div>
    </div>
  );
};
export const LDIC = () => {
  return (
    <div className="lab-comp">
      <h2>Linear and Digital IC Applications Lab</h2>
      <h3> About the laboratory </h3>
      <div className="flex-1">
        <div className="img-div">
          <img src={EDC_img}></img>
        </div>
        <div className="content-div">
          {" "}
          <p>
            The Linear and Digital IC Applications lab is a specialized
            laboratory for electronics and communication engineering students.
            It is equipped with various IC components and instruments like
            function generators, oscilloscopes, and digital multimeters. In this
            lab, students learn to design, simulate, and implement analog and
            digital circuits using different ICs and electronic devices. They
            acquire hands-on experience in troubleshooting and designing
            circuits that are used in modern-day electronic devices. These
            skills are essential for a career in electronics and communication
            engineering{" "}
          </p>
        </div>
      </div>

      <h3>Important Equipments</h3>
      <div className="flex-2 wrap">
        {" "}
        <CRO />
        <RPS />
        <FG />
        <FXRps />
      </div>
    </div>
  );
};

export const DDV = () => {
  return (
    <div className="lab-comp">
      <h2> Digital Design through Verilog HDL Lab</h2>
      <h3> About the laboratory </h3>
      <div className="flex-1">
        <div className="content-div">
          {" "}
          <p>
            In DDV lab students have the ability to code and simulate any
            digital function in Verilog HDL. Know the difference between
            synthesizable and non-synthesizable code. Understand library
            modeling, behavioral code and the differences between them.
            Understand the differences between simulator algorithms. Learn good
            coding techniques per current industrial practices. Understand logic
            verification using Verilog simulation. It is also to be used as
          </p>
        </div>
        <div className="img-div">
          <img src={EDC_img}></img>
        </div>
      </div>

      <h3>Important Equipments</h3>
      <div className="flex-1 wrap">
        {" "}
        <Xilinks />
        <Computer />
      </div>
    </div>
  );
};
export const AMPMC = () => {
  return (
    <div className="lab-comp">
      <h2>Microprocessor & Microcontroller Lab</h2>
      <h3> About the laboratory </h3>
      <div className="flex-1">
        <div className="img-div">
          <img src={EDC_img}></img>
        </div>
        <div className="content-div">
          {" "}
          <p>
            Microprocessors and Embedded Systems laboratory helps the students
            to develop their knowledge of processor architecture and the
            programming skills. This laboratory houses the hardware which
            includes 8085 Microprocessor trainer kits, 8086 Microprocessor
            trainer kits, 8051 Microcontroller trainer kits, interfacing cards
            and Keil software, 89C51 RTOS boards, CCross Compiler and Debugger.
            This laboratory provides hands-on experience to interface I/O
            devices, perform DAC conversions, keyboard and display(8279),
            traffic light control system, etc. The features and facilities
            available in this laboratory help the students to do their projects
            and enhance their knowledge on the latest trends and technologies.
            Students from other branch of engineering also make use of this
            laboratory and develop their skills in the field of Microprocessors
            & Embedded Systems and their applications.
          </p>
        </div>
      </div>

      <h3>Important Equipments</h3>
      <div className="flex-2 wrap">
        {" "}
        <MPKit Heading={"Micro Processor & Controller Tranier Kit"} />
        <Computer />
      </div>
    </div>
  );
};
export const EM = () => {
  return (
    <div className="lab-comp">
      <h2>Embedded systems lab</h2>
      <h3> About the laboratory </h3>
      <div className="flex-1">
        <div className="content-div">
          {" "}
          <p>
            An Embedded Systems lab is a specialized facility that offers
            hands-on training and experience in designing, developing, and
            testing embedded systems. The lab includes hardware and software
            components used to develop systems with real-time constraints and
            limited resources. Students learn to design and develop applications
            such as home automation systems, medical devices, and robotics,
            making the lab an essential resource for those interested in
            electrical engineering, computer science, and robotics.
          </p>
        </div>
        <div className="img-div">
          <img src={EDC_img}></img>
        </div>
      </div>

      <h3>Important Equipments</h3>
      <div className="flex-2 wrap">
        {" "}
        <MPKit Heading="8051 Microcontroller kits" />
        <Computer />
      </div>
    </div>
  );
};

export const ACDC = () => {
  return (
    <div className="lab-comp">
      <h2>ANALOG AND DIGITAL COMMUNICATION LAB</h2>
      <h3> About the laboratory </h3>
      <div className="flex-1">
        <div className="img-div">
          <img src={EDC_img}></img>
        </div>
        <div className="content-div">
          {" "}
          <p>
            Communication laboratory deals practical knowledge about Analog and
            digital communication systems. The laboratory is well equipped with
            equipment like trainer KITs and instruments required to give
            hands-on training to students. In this laboratory can observe
            advanced oscilloscope devices like “Digital Storage Oscilloscope”
            with 25MHz and 100MHz frequency range, Spectrum Analyzer with
            100MHz, Trainer KITs for all analog and digital communication system
            experiments”, In DSO directly note down the signal parameters like
            amplitude, frequency, time period etc. and storage of signal is also
            performed when compared to Cathode Ray Oscilloscope (CRO)
          </p>
        </div>
      </div>

      <h3>Important Equipments</h3>
      <div className="flex-2 wrap">
        <Digital_CRO />
        <Spectrum />
        <ACDC_lit />
        <FG />
        <CRO />
      </div>
    </div>
  );
};

export const DSP = () => {
  return (
    <div className="lab-comp">
      <h2> Digital Signal and Image Processing Lab</h2>
      <h3> About the laboratory </h3>
      <div className="flex-1">
        <div className="content-div">
          {" "}
          <p>
            The Digital signal and Image Processing Laboratory supports
            teaching, research and consultancy work on MATLAB and CC-Studio.
            Through simulation, students gain knowledge on analysis of different
            image processing techniques on an image and also designing the
            filters for analysis of the response of the filter. The laboratory
            can also be used for project work related to signal processing,
            Image processing and Communication system.
          </p>
        </div>
        <div className="img-div">
          <img src={EDC_img}></img>
        </div>
      </div>
      <p>
        {" "}
        The experiments of Digital signal and Image Processing laboratory are
      </p>
      <ol>
        <li>
          Acquire the knowledge on MATLAB tool to analyze and design the signal
          and Understand modern tool usage for apply image processing
          techniques.
        </li>
        <li>
          Can be able to analyze and Understand modern tool usage for apply
          image processing techniques like image transformation, enhancement,
          and compression techniques.
        </li>
        <li>
          Able to analyze and understand modern tool usage for apply on
          filtering, color image processing concepts.
        </li>
        <li>
          Able to analyze and design the frequency response of low and high pass
          filters.
        </li>
        <li>
          Able to analyze and design the frequency response of FIR filters.
        </li>
        <li>Able to compute FFT of a signal.</li>
        <li>
          To educate engineer researchers and to conduct research in all aspects
          of signal processing, image processing and communication system.
        </li>
      </ol>
      <p>The laboratory has</p>
      <ol>
        <li>The frequency response of analog LP/HP filters</li>
        <li>Sampling and effect of aliasing.
</li>
        <li>Linear and circular convolution.</li>
        <li>Compute PSD of sequences.
</li>
        <li>Compute FFT algorithm
</li>
        <li>Design FIR filter using the windowing technique.</li>
        <li>Image smoothening and sharpening in spatial and frequency domain.</li>
        <li>Color image processing.</li>
      </ol>
      <p>The features and facilities available in this laboratory help the students to do their projects and
enhance their knowledge on the latest trends and technologies. Students from other branch of
engineering also make use of this laboratory and develop their skills.</p>

      <h3>Important Equipments</h3>
      <div className="flex-2 wrap">
        {" "}
       <DSP_kit/>
       <MatLab/>
       <CRO/>
       <FG/>
        <Computer />
      </div>
    </div>
  );
};
