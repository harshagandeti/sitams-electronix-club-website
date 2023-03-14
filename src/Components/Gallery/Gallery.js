import { useState } from "react";

import ImgSrc_1 from "./GalleryImg/ImgSrc_1.JPG";
import ImgSrc_2 from "./GalleryImg/ImgSrc_2.jpg";
import ImgSrc_3 from "./GalleryImg/ImgSrc_3.jpg";
import ImgSrc_4 from "./GalleryImg/ImgSrc_4.JPG";
import ImgSrc_5 from "./GalleryImg/ImgSrc_5.JPG";
import ImgSrc_6 from "./GalleryImg/ImgSrc_6.JPG";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBackward, FaForward, FaRegTimesCircle } from "react-icons/fa";
import { ImCross} from "react-icons/im";

import "./Gallery.scss";
import SectionHeading from "../Section-Heading/SectionHeading";

const WSPGallery = () => {
  const galleryImages = [
    {
      id: 1,
      img: ImgSrc_1,
      title:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    },
    {
      _id: 2,
      img: ImgSrc_2,
      title:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    },
    {
      _id: 3,
      img: ImgSrc_3,
      title:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    },
    {
      _id: 4,
      img: ImgSrc_4,
      title:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    },
    {
      _id: 5,
      img: ImgSrc_5,
      title:
        "NTraijdfj jnfvlkdgl nvoeij;o je;oirjgegnkdnb nlrigoewi nelijgewiojg kjnglerweng kjnlntrit",
    },
    {
      _id: 6,
      img: ImgSrc_6,
      title:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div className="GalleryMainDiv">
      <div className="GalleryHeading">
        <SectionHeading heading="Gallery"/>
      </div>

      {openModal && (
        <div className="sliderWrap">
          <ImCross
            size={45}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FaBackward size={45} className="btnPrev" onClick={prevSlide} />
          <FaForward size={45} className="btnNext" onClick={nextSlide} />
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].img} alt="" />
            
            <span>{galleryImages[slideNumber].title}</span>
          </div>
          
        </div>
      )}

      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
             
      
                <img src={slide.img} alt="" />
                <span>{slide.title}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WSPGallery;
