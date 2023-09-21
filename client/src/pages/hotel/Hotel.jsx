import "./Hotel.scss";
import Navbar from "./../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useContext, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
// import { SearchContext } from "../../context/SearchContext";
import { SearchContext } from "./../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  // const photos = [
  //   {
  //     src: "https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/6021777/pexels-photo-6021777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/4906249/pexels-photo-4906249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/4825713/pexels-photo-4825713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setOpen(true);
    setSlideNumber(index);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  const location = useLocation();
  // console.log(location);

  const id = location.pathname.split("/")[2];
  const { data, loading, error, reFetch } = useFetch(`/api/hotels/find/${id}`);

  // SEARCH CONTEXT to USE DATE
  const { dates, options } = useContext(SearchContext);
  // console.log("Dates:", dates);
  // console.log("endDate:", dates[0]?.endDate);
  // console.log("startDate:", dates[0]?.startDate);
  // console.log("Dates array length:", dates.length);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  console.log(days);

  //user
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Getting details..."
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                {/* <img src={photos[slideNumber].src} alt="" className="sliderImg" /> */}
                <img
                  src={data.photo[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button onClick={handleClick} className="bookNow">
              Reserve or Book Now
            </button>
            <h1 className="hotelTitle">
              {/* Grand Hotel */}
              {data.name}
            </h1>
            <div className="hotelAAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                {/* Elton St 125 New york */}
                {data.address}
              </span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, index) => (
                <div className="hotelImgWrapper" key={index}>
                  <img
                    onClick={() => handleOpen(index)}
                    // src={photo.src}
                    src={data.photo}
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailTexts">
                <h1 className="hotelTitle">🌟{data.desc} 🌟</h1>
                <p className="hotelDesc">
                  Escape to the epitome of comfort and elegance at our exquisite
                  hotel's 2-bedroom apartment. Discover a world of indulgence
                  and relaxation as you step into your home away from home. 🏡
                  Your Sanctuary Away from Home 🏡 Nestled in the heart of [City
                  Name], our spacious 2-bedroom apartment offers you the perfect
                  blend of sophistication and homely warmth. With meticulously
                  designed interiors, you'll find every detail thoughtfully
                  curated to ensure your utmost comfort and convenience. ✨
                  Apartment Highlights ✨
                </p>
              </div>
              <div className="hotelDetailPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in Magodo, Ikosi.Lagos , this resort has a 9.1
                  excellent location score
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b>({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book now</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
