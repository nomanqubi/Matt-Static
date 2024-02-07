import React from 'react';
import '../../styles/AboutUs.css';

const GetInfo = () => {
  return (
    <div className="container my-5">
      <h1 style={{textAlign: "center"}}>Get Info</h1>
      <p style={{textAlign: "center"}}>
        If your business has an online store, learn how we can help you increase
        your revenue. Free checking by the expert team.
      </p>
      <div className="contact_input_body">
        <div className="contact-us-right">
          <div className="custom-input-group">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="custom-input-group">
            <input type="tel" placeholder="Your Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea rows="5" placeholder="Your Message"></textarea>
        </div>
      </div>
      <button className="submit-button mt-3">Send Messege</button>
    </div>
  );
};

export default GetInfo;
