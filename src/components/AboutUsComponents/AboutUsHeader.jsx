import React from 'react'
import "../../styles/AboutUs.css"
import Cycle from '../../images/sambike2.jpg'
const About = () => {
  return (
    <>
      <div className="container-fluid about-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-0 about-content">
              <div className='d-flex flex-column ps-4 pe-4'>
                  <span>BRIEFLY ABOUT US</span>
                  <h1 className='about_exp'>Large experience <br /> in sales</h1>
                  <h5 style={{ width: "90%", textAlign: "justify" }}>Our founder started this company as an underdog. Someone who faced much adversity throughout life. An entrepreneurial spirit was always present, however fear needed to be defeated. We need people who believe in us and support our dreams. I want to thank all our customers for believing in us! We could never achieve what we set out to accomplish without your unwavering support. Together, we are going to do the impossible and leave behind an honorable legacy. 
                  </h5>
                  {/* <button>Free Consultation</button> */}
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <img src={Cycle} alt="" className='about_img' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
