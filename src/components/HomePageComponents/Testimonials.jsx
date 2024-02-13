import React, { useState, useRef, useEffect } from 'react'
import '../../styles/Testimonial.css'
import Testimonial1 from '../../images/testimonial1.png'
import Testimonial2 from '../../images/testimonial2.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {

  const [sliderRef, setSliderRef] = useState(null);
  const [forwardClicked, setForwardClicked] = useState(false);
  const [backwardClicked, setBackwardClicked] = useState(false);

  useEffect(() => {
    AOS.init({
        offset: 300,
        duration: 1000,
    });
}, []); // Run this effect only once when the component mounts

  const settings = {
    slidesToShow: 2,
    autoplay: false,
    speed: 800,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400, // XL
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1200, // LG
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992, // MD
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768, // SM
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576, // XS
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480, // XS
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const goNext = () => {
    setForwardClicked(true);
    setBackwardClicked(false);
    sliderRef.slickNext();
  };

  const goPrev = () => {
    setForwardClicked(false);
    setBackwardClicked(true);
    sliderRef.slickPrev();
  };


  return (
    <>
      <div className="container mt-5 pb-3">
        <div className="row" data-aos="fade-up">
          <div className="col">
            <h1 className='latest-reviews'>Our Latest Reviews</h1>
          </div>
        </div>
        <div className="row mt-3" data-aos="fade-down">
          <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
            <div className="col-md-6">
              <div className='card-1 ps-3 pe-3 pt-3 pb-3 ms-3'>
                <img src={Testimonial1} alt="" />
                <p className='AuthorName pt-3'>Anna Merry</p>
                <p className='Authortag'>Sambikes offers seamless bike services, providing effortless booking, skilled technicians, and transparent pricing. Experience convenience and reliability with Sambikes</p>
                <p className='Authortag'>23rd Oct, 2023</p>
              </div>
            </div>
            <div className="col-md-6 ps-3">
              <div className='card-2 ps-3 pe-3 pt-3 pb-3'>
                <img src={Testimonial2} alt="" />
                <p className='AuthorName pt-3'>Anna Merry</p>
                <p className='Authortag'>Experience excellence with Sambikes – your trusted bike service partner. From easy booking to skilled technicians and transparent pricing, Sambikes ensures top-notch service</p>
                <p className='Authortag'>13rd Dec, 2023</p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="arrow">
              <FaArrowLeft className={`backward ${backwardClicked ? 'clicked' : ''}`} onClick={goPrev} />
              <FaArrowRight className={`forward ${forwardClicked ? 'clicked' : ''}`} onClick={goNext} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Testimonials
