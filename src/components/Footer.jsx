import React from 'react'
import Logo from '../images/Logo.png';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className='footer-top'>
              <img src={Logo} alt="" height={50} width={200} className="logo" />
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className='box'>
              <h4>Social</h4>
              <ul style={{ padding: "0px" }}>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className='our-contact'>
              <div className='box'>
                <h4>Contact</h4>
                <ul style={{ padding: "0px" }}>
                  <li>Contact us</li>
                  <li>example1@gmail.com</li>
                  <li>example2@gmail.com</li>
                  <li>Call Us: +1 245 8948-4343</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='our-information'>
              <div className='box'>
                <h4>Our Information</h4>
                <ul style={{ padding: "0px" }}>
                  <li>privicy policy</li>
                  <li>Term And Condition</li>
                  <li>Support Page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className='text-center'>Copyright © 2024 We Have and You HaveAll rights reserved</p>

    </>

  )
}

export default Footer