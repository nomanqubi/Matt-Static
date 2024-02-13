import React, { useState } from 'react';
import '../../styles/Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowRight } from 'react-icons/fa';
import Bike from '../../images/sambike.jpg';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const renderCarouselItems = () => {
    const carouselItems = [];

    for (let i = 0; i < 5; i++) {
      carouselItems.push(
        <Carousel.Item key={i} interval={3000}>
          <div className="container mt-4 slider-container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0 slider_content">
                <div className='d-flex flex-column ps-5 pe-3'>
                  <div className='slider-text'>
                    We Have exists simply to meet a need or want and build a connection.
                  </div>
                  <button className='collection-button'>Go to Collection <FaArrowRight /></button>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0">
                <img src={Bike} alt="" className='img' style={{ width: "100%", height: "550px" }} />
              </div>
            </div>
          </div>
        </Carousel.Item>
      );
    }

    return carouselItems;
  };

  return (
    <div className="container-fluid position-relative" id="headcarousel_container">
      <Carousel controls={false} interval={false} indicators={false} activeIndex={activeIndex} onSelect={handleSelect}>
        {renderCarouselItems()}
      </Carousel>
      <div className="custom-indicators">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`indicator ${activeIndex === index ? 'active' : ''}`} onClick={() => handleIndicatorClick(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;