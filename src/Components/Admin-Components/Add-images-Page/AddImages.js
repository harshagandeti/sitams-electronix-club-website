import React from 'react'
import "./AddImages.scss"
import AddImage from "./Add-image.jpg"

const AddImages = () => {
  return (
    <div className='AI-Main-Div'>
    <div className='Container'>
        <div className='Left'>
       
            <img src={AddImage}></img>
        </div>
        <div className='border'>
        <div className='Right'>
        <span>Upload Image to gallery</span>
        <div className='form'>
            <form>
                <label className='label'>Enter Title </label>
                <input className='input' type='text' placeholder='Enter title' name='title'></input>
                <label className='label'>Choose image </label>
                <input className='input-file' type='file'  name='image'></input>
                <button>Upload</button>
            </form>
        </div>
        </div>
        </div>
    </div>
    
    
    </div>
  )
}

export default AddImages