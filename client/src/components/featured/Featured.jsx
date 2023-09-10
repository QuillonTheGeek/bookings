import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>120 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Lagos</h1>
          <h2>10 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Tokyo</h1>
          <h2>120 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
