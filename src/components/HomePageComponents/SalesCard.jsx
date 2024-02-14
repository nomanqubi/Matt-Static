import React, { useEffect } from 'react';
import '../../styles/SalesCard.css';
import SalePic1 from '../../images/sale Pic 1.png';
import SalePic2 from '../../images/Sale Pic 2.png';
import TwoWatches from '../../images/TwoWatches.png';
import Cycle from '../../images/my275-1-removebg-preview\ \(1\).jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SalesCard = () => {

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []); // Run this effect only once when the component mounts

  return (
    <>
      <div className="container mt-5">
        <div className="row salesportion">
          <div className="col-lg-8 col-md-12 p-0" data-aos="fade-up">
            <div className="row m-0">
              <div className="col-md-6 col-sm-6 col-12 p-0">
                <div className='img_positions'>
                  <img src={SalePic1} alt="" className='img_card'/>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 p-0">
                <div className='img_position'>
                  <img src={SalePic2} alt="" className='img_card'/>
                </div>
              </div>
            </div>
            <div className="row m-0 mt-3">
              <div className="col lefts p-0">
                <div className='lower-left'>
                  <div className="row m-0">
                    <div className="col-md-6 col-sm-6 col-6">
                      <img src={Cycle} alt="" style={{ width: "100%", height: "180px" }} />
                    </div>
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className='d-flex flex-column justify-content-center align-item-center texts'>
                        <div className='cycle_style'>
                          Find the best watch for you!
                        </div>
                        <div style={{ color: '#0F75BC', fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>
                          Smart
                        </div>
                        <div style={{ color: '#F7941D', fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>
                          Watches
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block p-0 ps-2" data-aos="fade-down">
            <div className='right-left'>
              <img src={TwoWatches} alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesCard;