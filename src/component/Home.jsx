import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homedata } from "../data";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <sction className="home">
        <div className="container">
          <Slider {...settings}>
            {homedata.map((item) =>{
                const{name,desc,cover,signature}=item
              return (
                <>
                 <div className="itemContent flexSB">
                  <div className="left">
                    <h1>{name}</h1>
                    <p>{desc}</p>
                    <img src={signature} alt="" />
                  </div>

                  <div className="right">
                    <img src={cover} alt="" />
                  </div>
                </div>
                </>
              );
            })}
          </Slider>
        </div>
      </sction>
    </div>
  );
};

export default Home;
