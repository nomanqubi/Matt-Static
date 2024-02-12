import React from 'react';
import '../styles/ContactUs.css';
import mapImage from '../images/mapImage.png'

const QuotePage = () => {
  return (
    <>
      <div className="container-fluid our-blog">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 style={{ textAlign: "center" }}>Get a Quote</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='d-flex justify-content-center'>
              <div className="qoute-container ps-4 pe-4 pt-4 pb-4">
                <div className="row justify-content-center mt-5">
                  <div className="col-sm-6">
                    <input type="text" placeholder="Your Name" style={{ backgroundColor: 'white' }} />
                  </div>
                  <div className="col-sm-6">
                    <input type="email" placeholder="Your Email" className='options' style={{ backgroundColor: 'white' }} />
                  </div>
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-sm-6">
                    <input type="tel" placeholder="Your Phone Number" style={{ backgroundColor: 'white' }} />
                  </div>
                  <div className="col-sm-6">
                    <select name="select" id="" placeholder='select' className='ps-2 pe-2 options' style={{ width: '100%', height: '45px', border: 'none' }}>
                      <option value="">Male</option>
                      <option value="">Female</option>
                      <option value="">Transgender</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <textarea rows="5" placeholder="Your Message" style={{ backgroundColor: 'white' }}></textarea>
                  </div>
                </div>
                <button className="submit-button mt-4">Request a Quote</button>
                <div className="row mt-4">
                  <div className="col-md-4 col-sm-6 col-6">
                    <h2 className="contact-us-heading">Address:</h2>
                    <p className="paragrapgh">
                      4035 Heavens,
                      <br />
                      Los Angeles, California
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-6 col-6">
                    <h2 className="contact-us-heading">Phone Number:</h2>
                    <p className="paragrapgh">+000 313 577 111</p>
                    <p className="paragrapgh">+000 313 577 222</p>
                  </div>
                  <div className="col-md-4">
                    <h2 className="contact-us-heading">Email:</h2>
                    <p className="paragrapgh">info@example.com</p>
                    <p className="paragrapgh">support@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotePage;
