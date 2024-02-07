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
          <Carousel.Item interval={1000}>
            <div className="container mt-4 slider-container">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0 content">
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
          {/* <Carousel.Item interval={500}>
            <div className="container mt-4 slider-container">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0 content">
                  <div className='slider-text'>
                    We Have has a purpose to be one of the most trusted companies in every market sector.
                  </div>
                  <button className='collection-button'>Go to Collection <FaArrowRight /></button>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0">
                  <img src={Bike} alt="" className='img' style={{ width: "100%", height: "550px" }} />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div className="container mt-4 slider-container">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0 content">
                  <div className='slider-text'>
                    We believe there is more than enough to go around for everyone.
                  </div>
                  <button className='collection-button'>Go to Collection <FaArrowRight /></button>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0">
                  <img src={Bike} alt="" className='img' style={{ width: "100%", height: "550px" }} />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div className="container mt-4 slider-container">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0 content">
                  <div className='slider-text'>
                    We believe that service, price and quality are essential for every customer’s experience.
                  </div>
                  <button className='collection-button'>Go to Collection <FaArrowRight /></button>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0">
                  <img src={Bike} alt="" className='img' style={{ width: "100%", height: "550px" }} />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div className="container mt-4 slider-container">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0 content">
                  <div className='slider-text'>
                    We are always looking for ways to get better.
                  </div>
                  <button className='collection-button'>Go to Collection <FaArrowRight /></button>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0">
                  <img src={Bike} alt="" className='img' style={{ width: "100%", height: "550px" }} />
                </div>
              </div>
            </div>
          </Carousel.Item> */}
        </Carousel>
        <div className="custom-indicators">
          <span className={`indicator ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleIndicatorClick(0)}></span>
          <span className={`indicator ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleIndicatorClick(1)}></span>
          <span className={`indicator ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleIndicatorClick(2)}></span>
          <span className={`indicator ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleIndicatorClick(3)}></span>
          <span className={`indicator ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleIndicatorClick(4)}></span>
        </div>
      </div>

      {/* <div class="container-fluid" id="headcarousel_container">
        <div id="headcarouselid" class="carousel slide" data-ride="carousel">

          <ul class="carousel-indicators">
            <li class="active" data-target="#headcarouselid" data-slide-to="0"></li>
            <li class="" data-target="#headcarouselid" data-slide-to="1"></li>
            <li class="" data-target="#headcarouselid" data-slide-to="2"></li>
            <li class="" data-target="#headcarouselid" data-slide-to="3"></li>
            <li class="" data-target="#headcarouselid" data-slide-to="4"></li>
          </ul>

          <div class="carousel-inner">
            <div class="item active">
              <div className="container mt-4 slider-container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0 content">
                    <div className='slider-text'>
                      We Have exists simply to meet a need or want and build a connection.
                    </div>
                    <button className='collection-button'>Go to Collection <FaArrowRight /></button>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0">
                    <img src={Bike} alt="" className='img' style={{ width: "100%", height: "550px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="container mt-4 slider-container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0 content">
                    <div className='slider-text'>
                      We Have exists simply to meet a need or want and build a connection.
                    </div>
                    <button className='collection-button'>Go to Collection <FaArrowRight /></button>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0">
                    <img src={Bike} alt="" className='img' style={{ width: "100%", height: "550px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <img src="https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_960_720.jpg" title="slidepicture" alt="slidepicture" />
            </div>
            <div class="item">
              <img src="https://cdn.pixabay.com/photo/2017/09/08/20/29/chess-2730034_960_720.jpg" title="slidepicture" alt="slidepicture" />
            </div>
            <div class="item">
              <img src="https://cdn.pixabay.com/photo/2018/05/30/15/31/rustic-3441673_960_720.jpg" title="slidepicture" alt="slidepicture" />
            </div>
          </div>



        </div>
      </div> */}

    </>
  )
}

export default Slider
