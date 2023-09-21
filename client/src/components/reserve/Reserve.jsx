import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Reserve = ({ setOpen, hotelId }) => {
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        SELECT YOUR ROOMS
      </div>
    </div>
  );
};

export default Reserve;
