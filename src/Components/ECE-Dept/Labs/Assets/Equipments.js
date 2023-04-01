import React from 'react'
import "./Style.scss";
import CRO_img from "./images/cro.png"
import RPS_img from "./images/RPS.webp"
import FG_img from "./images/function-generator-500x500.webp"
import FxRps_img from "./images/fxRps.webp"
import Computer_img from "./images/Computers.jpeg"
import SD_img from "./images/DCPowerSupply.jpg"
import MultiSim_img from "./images/ni-multisim-9083-1.jpg"
import Xilinks_img from "./images/Xlinks.jpeg"
import MP_img from "./images/microprocessor-trainer-trainer-kit-500x500.webp"
import TS_Kly_img from "./images/Gunn power supply & oscillator.jpeg"
import klyimg from "./images/klystron-power-supply.jpeg"
import Spec_img from "./images/Spectrum.jpeg"
import Digital_CRO_img from "./images/Digital-CRO.jpg"
import ACDC_img from "./images/ACDC-Kit.jpeg"
import DSP_img from "./images/DSP-kit.png_large"
import MatLab_img from "./images/Matlab.jpg"


export const CRO = () => {
  return (
      <div className="Main"><img src={CRO_img}></img>
      <h4>Cathode Ray Oscilloscope 20MHz</h4>
      </div>

  )
}
export const RPS = () => {
  return (
      <div className="Main"><img src={RPS_img}></img>
      <h4>Regulated power supply (0-30v)</h4>
      </div>

  )
}
export const FG = () => {
  return (
      <div className="Main"><img src={FG_img}></img>
      <h4>Function Generator - 1MHz</h4>
      </div>

  )
}
export const FXRps = () => {
  return (
      <div className="Main"><img src={FxRps_img}></img>
      <h4>Fixed Power Supply (0-15)</h4>
      </div>

  )
}
export const Computer = () => {
  return (
      <div className="Main"><img src={Computer_img}></img>
      <h4>Computers</h4>
      </div>

  )
}
export const SD_RPS = () => {
  return (
      <div className="Main"><img src={SD_img}></img>
      <h4>Single/Dual Tracking power supply</h4>
      </div>

  )
}
export const MultiSim = () => {
  return (
      <div className="Main"><img src={MultiSim_img}></img>
      <h4>NI-MULTISIM-PSPICE Software</h4>
      </div>

  )
}
export const Xilinks = () => {
  return (
      <div className="Main"><img src={Xilinks_img}></img>
      <h4>XiLinks ISE Design Suite</h4>
      </div>

  )
}
export const MPKit = ({Heading}) => {
  return (
      <div className="Main"><img src={MP_img}></img>
      <h4>{Heading}</h4>
      </div>

  )
}
export const TB_Kly = () => {
  return (
      <div className="Main"><img src={TS_Kly_img}></img>
      <h4>Microwave Test Bench Klystron </h4>
      </div>

  )
}
export const Kly_PS = () => {
  return (
      <div className="Main"><img src={klyimg}></img>
      <h4>Klystron power supply</h4>
      </div>

  )
}
export const Spectrum = () => {
  return (
      <div className="Main"><img src={Spec_img}></img>
      <h4>Spectrum analyzer-100MHz </h4>
      </div>

  )
}
export const Digital_CRO = () => {
  return (
      <div className="Main"><img src={Digital_CRO_img}></img>
      <h4>Digital storage Oscilloscope 100MHz </h4>
      </div>

  )
}
export const ACDC_lit = () => {
  return (
      <div className="Main"><img src={ACDC_img}></img>
      <h4>Analog & Digital Communication Trainer kits</h4>
      </div>

  )
}
export const MatLab = () => {
  return (
      <div className="Main"><img src={MatLab_img}></img>
      <h4>MATLAB SOFTWARE 2017b</h4>
      </div>

  )
}
export const DSP_kit= () => {
  return (
      <div className="Main"><img src={DSP_img}></img>
      <h4>DSP Software & Hardware kit</h4>
      </div>

  )
}
