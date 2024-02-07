import React from 'react';
import callsupport from '../../images/call Support.png'
import guarantee from '../../images/gurantee.png'
import specialGifts from '../../images/special gift.png'
import shipping from '../../images/shipping.png'

const SingleProductFooter = () => {
  return (
    <div className="footer-container d-flex" style={{justifyContent:'space-around'}}>
      <div className="footer-item d-flex">
        <img src={callsupport} alt="Image 1" className='singlefooterimage'  />
        <div>
        <h4>call Support</h4>
        <p>Online Support</p>
        </div>
      </div>
      <div className="footer-item d-flex">
        <img src={guarantee} alt="Image 2" className='singlefooterimage'/>
        <div>
        <h4>Guarantee</h4>
        <p>Money back</p>
        </div>
      </div>
      <div className="footer-item d-flex">
        <img src={specialGifts} alt="Image 3" className='singlefooterimage'/>
        <div>
        <h4>Special Gifts</h4>
        <p>Receive gifts</p>
        </div>
      </div>
      <div className="footer-item d-flex">
        <img src={shipping} alt="Image 4" className='singlefooterimage'/>
        <div>
        <h4>Shipping</h4>
        <p>Worldwide Shipping</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductFooter;
