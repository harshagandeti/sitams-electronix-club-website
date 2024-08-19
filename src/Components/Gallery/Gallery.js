import { useEffect, useState } from "react";
import { db } from "../../Config";
import { collection, deleteDoc, doc ,onSnapshot} from "firebase/firestore";
import { FaBackward, FaForward, FaRegTimesCircle } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Gallery.scss";
import SectionHeading from "../Section-Heading/SectionHeading";

const WSPGallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState();
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };
  useEffect(() => {
       const eventSnapshots = onSnapshot(
      collection(db, "Gallery"),
      (Snapshots) => {
        const filterData = Snapshots.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(filterData);
      },
      (error) => console.log(error)
    );
    return () => eventSnapshots();
  }, []);
  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(data.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const deleteHandler = async(ID) => {
  
    const {id}=ID
    const eventDeleteDoc = doc(db, "Gallery", id);
    await deleteDoc(eventDeleteDoc);
    toast.warning("Image deleted successfully",{
      position:toast.POSITION.TOP_CENTER,
      theme:"colored"
    })
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === data.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div className="GalleryMainDiv">
      <div className="GalleryHeading">
        <SectionHeading heading="Gallery" />
      </div>

      {openModal && (
        <div className="sliderWrap">
          <FaRegTimesCircle
            size={45}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FaBackward size={45} className="btnPrev" onClick={prevSlide} />
          <FaForward size={45} className="btnNext" onClick={nextSlide} />
          <div className="fullScreenImage">
            <img src={data[slideNumber].imgUrl} alt="" />
            <span>{data[slideNumber].title}</span>
          </div>
        </div>
      )}
      <div className="galleryWrap">
        {data &&
          data.map((slide, index) => {
            {/* const { id } = slide; */}
            return (
              <div
                className="single"
                key={slide.id}
              >
                <img src={slide.imgUrl}  onClick={() => handleOpenModal(index)} alt="" />
                <button  onDoubleClick={() =>{deleteHandler({id:slide.id})}}  className="delete">
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default WSPGallery;
