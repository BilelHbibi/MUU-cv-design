import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { portfolio } from '../data';
import Heading from "./common/Heading"

const Portfolio = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
  return (
    <>
     <div className="portfolio creative mrTB">
        <div className="container">
        <Slider {...settings}>
            {portfolio.map((item)=>{
                const{cover,title,desc,p1,p2,p3,p4,p5}=item
                return(
                    <>
                    <div className="itemContent flex">
                        <Heading title="portfolio" />
                        <div className="contentRight">
                            <img src={cover} alt="" />
                        </div>

                        <div className="contentLeft">
                            <h1>{title}</h1>
                            <p>{desc}</p>
                            <ul>
                                <li>
                                    <i className="fa fa-minus"></i>
                                    {p1}
                                </li>

                                <li>
                                    <i className="fa fa-minus"></i>
                                    {p2}
                                </li>
                                <li>
                                    <i className="fa fa-minus"></i>
                                    {p3}
                                </li>

                                <li>
                                    <i className="fa fa-minus"></i>
                                    {p4}
                                </li>
                                <li>
                                    <i className="fa fa-minus"></i>
                                    {p5}
                                </li>
                            </ul>
                            <button className="primary-btn">
                               VIEW WEBSITE <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    </div>
                    </>
                )
            })}
        </Slider>  
        </div>
     </div>
    </>
  )
}

export default Portfolio