import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>200 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>200 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/10430976/pexels-photo-10430976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>200 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/10525693/pexels-photo-10525693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villa</h1>
          <h2>200 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>157 Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
