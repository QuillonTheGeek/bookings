import "./Hotel.scss";
import Navbar from "./../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: "https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/6021777/pexels-photo-6021777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/4906249/pexels-photo-4906249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/4825713/pexels-photo-4825713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper" key={index}>
                <img src={photo.src} className="hotelImg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
