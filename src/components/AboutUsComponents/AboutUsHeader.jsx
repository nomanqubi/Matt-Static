import React from 'react'
import "../../styles/AboutUs.css"
import Cycle from '../../images/sambike2.jpg'
const About = () => {
  return (
    <>
      <div className="container-fluid about-main">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-6 p-0 about-content">
              <div className='d-flex flex-column ps-4 pe-4'>
                  <span>BRIEFLY ABOUT US</span>
                  <h1>Large experience <br /> in sales</h1>
                  <h5 style={{ width: "90%", textAlign: "justify" }}>We have been working in the marketing sphere for more than 35 years. During this time we successfully finished 10 000+ projects. Our company guarantee the quality that have been tested over the years.
                  </h5>
                  <button>Free Consultation</button>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <img src={Cycle} alt="" className='about_img' style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
