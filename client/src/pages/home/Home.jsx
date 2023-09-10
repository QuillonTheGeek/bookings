import Featured from "../../components/featured/Featured";
import FeaturedProps from "../../components/featuredProps/FeaturedProps";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import MailList from "../../components/mailList/MailList";
import "./Home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Luxury Relaxation</h1>
        <FeaturedProps />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
