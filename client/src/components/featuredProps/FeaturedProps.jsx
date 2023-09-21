import useFetch from "../../hooks/useFetch";
import "./FeaturedProps.css";

const FeaturedProps = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels?featured=true&limit=3"
  );

  console.log(data);
  return (
    <div className="fp">
      {loading ? (
        "Loading ...."
      ) : (
        <>
          {data.map((item) => {
            return (
              <div className="fpItem" key={item._id}>
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting from ${item.cheapestPrice}
                </span>
                <div className="fpRating">
                  <button>{item.rating} </button>
                  <span>Excellent</span>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FeaturedProps;
