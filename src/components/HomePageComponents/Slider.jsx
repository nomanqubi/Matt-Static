import React, { useState } from 'react'
import '../../styles/Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import Bike from '../../images/sambike.jpg'
import Cycle from '../../images/cycle.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { Grid, Typography, Button, Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Slider = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };


  return (
    <>
      <div className="container-fluid position-relative" id="headcarousel_container">
        <Carousel controls={false} interval={false} indicators={false} activeIndex={activeIndex} onSelect={handleSelect}>
          <Carousel.Item interval={3000}>
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
          <Carousel.Item interval={3000}>
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
          <Carousel.Item interval={3000}>
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
          <Carousel.Item interval={3000}>
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
          <Carousel.Item interval={3000}>
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
        </Carousel>
        <div className="custom-indicators">
          <span className={`indicator ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleIndicatorClick(0)}></span>
          <span className={`indicator ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleIndicatorClick(1)}></span>
          <span className={`indicator ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleIndicatorClick(2)}></span>
          <span className={`indicator ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleIndicatorClick(3)}></span>
          <span className={`indicator ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleIndicatorClick(4)}></span>
        </div>
      </div>
    </>
  )
}

export default Slider
