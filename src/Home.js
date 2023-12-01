import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
    <Header />
    <div className="home">
      <Slider {...settings}>
        <div>
          <img
            className="home__image"
            alt=""
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          />
        </div>
        <div>
          {/* Your second image */}
          <img
            className="home__imageOne"
            alt=""
            src="	https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
          />
        </div>
        <div>
          {/* Your third image */}
          <img
            className="home__imageTwo"
            alt=""
            src="	https://m.media-amazon.com/images/I/71YFuAhOPKL._SX3000_.jpg"
          />
        </div>
      </Slider>
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="	https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY218_.jpg"
        />
        <Product
          id="12321341"
          title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater 2 Layer Red Painting (6.5QT, Red)"
          price={159.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61wzXuHCb1L._AC_UY218_.jpg"
        />

        <Product
          id="36365134"
          title="SKG Smart Watch, Fitness Tracker with 5ATM Swimming Waterproof, Touch Screen Bluetooth Smartwatch Fitness Watch for Android-iPhone iOS, V7"
          price={49.95}
          rating={3}
          image="https://m.media-amazon.com/images/I/71JU-bUt-sL._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Product
          id="46551172"
          title="Oppenheimer [DVD]"
          price={31.96}
          rating={5}
          image="	https://m.media-amazon.com/images/I/51IIKyH8cAL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="73422674"
          title="Apple iPad Mini 4, 128GB, Space Gray - WiFi (Renewed)"
          price={199.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/618hKLi2ljL._AC_UY218_.jpg"
        />

        <Product
          id="94382256"
          title="Call of Duty: Vanguard"
          price={36.11}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71-o7Rap2HL._AC_UL160_SR160,160_.jpg"
        />
      </div>
    </div>
    </>
  );
};

export default Home;
