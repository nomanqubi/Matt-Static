import React from 'react';
import '../styles/ContactUs.css'
import mapImage from '../images/mapImage.png'

const ContactPage = () => {
  return (
    <>
      <div className="container-fluid our-blog">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="content">
                <h1>Contact Us</h1>
                <p>
                  You offer a good product, make advertising, analyze the market but
                  <br />
                  still have no improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-container">
        <div className="contact-us-left">
          <h2 className='contact-us-heading'>Address:</h2>
          <p className='paragrapgh'>4035 Heavens,<br />Los Angeles, California</p>
          <h2 className='contact-us-heading'>Phone Number:</h2>
          <p className='paragrapgh'>+000 313 577 111</p>
          <p className='paragrapgh'>+000 313 577 222</p>
          <h2 className='contact-us-heading'>Email:</h2>
          <p className='paragrapgh'>info@example.com</p>
          <p className='paragrapgh'>support@example.com</p>
        </div>
        <div className="contact-us-right">
          <div className="custom-input-group">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="custom-input-group mt-3">
            <input type="tel" placeholder="Your Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea rows="6" placeholder="Your Message" className='mt-3'></textarea>
        </div>
      </div>
      <button className="submit-button">Send Messege</button>
      <img src={mapImage} alt="mapimage" className='mapImage mb-4' />
    </>
  );
};

export default ContactPage;

