import React from 'react';
import '../../styles/AboutUs.css';

const GetInfo = () => {
  return (
    <div className="container mt-5">
      <h1 style={{ textAlign: "center" }}>Get Info</h1>
      <p style={{ textAlign: "center" }}>
        If your business has an online store, learn how we can help you increase
        your revenue. Free checking by the expert team.
      </p>
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
            <input type="email" placeholder="Your Email" className='input_contact' />
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
            <input type="tel" placeholder="Your Phone Number" />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
            <input type="text" placeholder="Subject" className='input_contact' />
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
        <div className="col-xxl-8 col-xl-8 col-lg-10 col-md-10">
          <textarea rows="5" placeholder="Your Message"></textarea>
        </div>
      </div>
      <div className="row mt-3 justify-content-center">
        <div className="col-xxl-8 col-xl-8 col-lg-10 col-md-10">
        <button className="submit-button">Send Messege</button>

        </div>
      </div>

      

    </div>
  );
};

export default GetInfo;
