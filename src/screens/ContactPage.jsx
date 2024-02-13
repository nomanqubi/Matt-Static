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
              <div className='d-flex flex-column'>
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
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-3 col-md-4">
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
              </div>
              <div className="col-lg-9 col-md-8">
              <div className="contact-us-right">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="Your Email" className='input_contact' />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <input type="tel" placeholder="Your Phone Number" />
                  </div>
                  <div class="col-md-6">
                    <input type="text" placeholder="Subject" class='input_contact' />
                  </div>
                </div>
                <textarea rows="6" placeholder="Your Message" className='mt-3'></textarea>
              </div>
              <button className="submit-button mt-3">Send Messege</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={mapImage} alt="mapimage" className='mapImage mt-5' />
    </>
  );
};

export default ContactPage;

