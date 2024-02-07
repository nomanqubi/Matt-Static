import React from 'react';
import '../styles/ContactUs.css';

const QuotePage = () => {
  return (
    <>
      <div className="our-blog">
        <div className="container text-center">
          <h1>Get a Quote</h1>
          <p>
            You offer a good product, make advertising, analyze the market but
            <br />
            still have no improvement
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center qoute-container mb-4">
        <div className="qoute-container container">
          <div className="contact-us-right" style={{ width:'90%',margin:'auto', textAlign:'center',marginTop:'40px'}}>
            <div className="custom-input-group">
              <input type="text" placeholder="Your Name" style={{ backgroundColor: 'white' }} />
              <input type="email" placeholder="Your Email" style={{ backgroundColor: 'white' }} />
            </div>
            <div className="custom-input-group">
              <input type="tel" placeholder="Your Phone Number" style={{ backgroundColor: 'white' }} />
              <select name="select" id="" placeholder='select' style={{ width: '48%', border: 'none' }}>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Transgender</option>
              </select>
            </div>
            <textarea rows="5" placeholder="Your Message" style={{ backgroundColor: 'white' }}></textarea>
            <div className='dotted-border' style={{ height: '150px', width: '100%', border: '1px dotted orange' }}>
              <div className="dotted-div-inside" style={{ textAlign: 'center', marginTop: '20px' }}>
                <button className='submit-button' style={{ marginTop: '20px' }}>Upload</button>
                <p>Drag file here or click to upload</p>
              </div>
            </div>
            <button className="submit-button mt-4">Request a Quote</button>
          </div>
          <div className="contact-us-left" style={{display:'flex', width:'90%',justifyContent:'space-between',margin:'auto'}}>
            <div>
              <h2 className="contact-us-heading">Address:</h2>
              <p className="paragrapgh">
                4035 Heavens,
                <br />
                Los Angeles, California
              </p>
            </div>
            <div>
              <h2 className="contact-us-heading">Phone Number:</h2>
              <p className="paragrapgh">+000 313 577 111</p>
              <p className="paragrapgh">+000 313 577 222</p>
            </div>
            <div>
              <h2 className="contact-us-heading">Email:</h2>
              <p className="paragrapgh">info@example.com</p>
              <p className="paragrapgh">support@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotePage;
