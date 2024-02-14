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
                      <input type="text" placeholder="Your Name" style={{ background: "#F5F5F5" }} />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Your Email" className='input_contact' style={{ background: "#F5F5F5" }} />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <input type="tel" placeholder="Your Phone Number" style={{ background: "#F5F5F5" }} />
                    </div>
                    <div class="col-md-6">
                      <input type="text" placeholder="Subject" class='input_contact' style={{ background: "#F5F5F5" }} />
                    </div>
                  </div>
                  <textarea rows="6" placeholder="Your Message" className='mt-3' style={{ background: "#F5F5F5" }}></textarea>
                </div>
                <button className="submit-button mt-3">Send Messege</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.859981252498!2d74.18231357543402!3d32.181050273918444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2990ca7332c7%3A0xda83589acd8c568d!2sMumtaz%20Market!5e0!3m2!1sen!2s!4v1707920328928!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: "0", marginTop: "40px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default ContactPage;

