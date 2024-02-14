import React, { useState } from 'react';
import '../styles/ContactUs.css';
import { useParams, useLocation } from 'react-router-dom';
import mapImage from '../images/mapImage.png'
import productData from '../data/productsData';

const QuotePage = () => {

  const [selectedValues, setSelectedValues] = useState({
    product: "",
    color: "",
    size: ""
  });

  const { productId } = useParams();
  const product = productData.find((p) => p.id.toString() === productId);
  const location = useLocation();
  const [quantity, setQuantity] = useState("");

  if (productId) {
    var { count, selectedSize, selectedColor } = location?.state;
    console.log("ProductId>>>>>>>>>>>", "Quantity>>>>>", count, "Size>>>>>", selectedSize, "Color>>>>>", selectedColor);
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedValues(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(">>>>>>>>>>:", name, value)
  };

  return (
    <>
      <div className="container-fluid our-blog">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 style={{ textAlign: "center", color: 'white' }}>Get a Quote</h1>
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
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-sm-6">
                    <input type="email" placeholder="Your Email" className='options' />
                  </div>
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-sm-6">
                    <input type="tel" placeholder="Your Phone Number" />
                  </div>
                  <div className="col-sm-6">
                    {productId ? (
                      <div className='input_quote_style'>
                        {product.name}
                      </div>
                    ) : (
                      <select
                        name="product"
                        className='ps-2 pe-2 options'
                        value={selectedValues.product}
                        onChange={handleSelectChange}
                      >
                        <option value="" disabled hidden>Select Product</option>
                        <option value="JG20">JG20</option>
                        <option value="MY275" >MY275</option>
                        <option value="XD26" >XD26</option>
                        <option value="XD26-II" >XD26-II</option>
                        <option value="M20" >M20</option>
                        <option value="M20-II" >M20-II</option>
                        <option value="M20-III" >M20-III</option>
                        <option value="20LVXD30-II" >20LVXD30-II</option>
                      </select>
                    )}
                  </div>
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-sm-6">
                    {selectedSize ? (
                      <div className='input_quote_style'>
                        {selectedSize}
                      </div>
                    ) : (
                      <select
                        name="size"
                        className='ps-2 pe-2'
                        style={{ color: "grey" }}
                        value={selectedValues.size}
                        onChange={handleSelectChange}
                      >
                        <option value="" disabled hidden>Select Size</option>
                        <option value="Small">Small</option>
                        <option value="Medium" >Medium</option>
                        <option value="Large" >Large</option>
                      </select>
                    )}
                  </div>
                  <div className="col-sm-6">
                    {selectedColor ? (
                      <div className='input_quote_style'>
                        {selectedColor}
                      </div>
                    ) : (
                      <select
                        name="color"
                        className='ps-2 pe-2 options'
                        value={selectedValues.color}
                        onChange={handleSelectChange}
                      >
                        <option value="" disabled hidden>Select Color</option>
                        <option value="Red">Red</option>
                        <option value="Grey" >Grey</option>
                        <option value="Black" >Black</option>
                      </select>
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-6">
                    {count ? (
                      <input type="number" placeholder="Your Quantity" value={count} readOnly />
                    ) : (
                      <input type="number" placeholder="Your Quantity" value={quantity} onChange={handleQuantityChange} />
                    )}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <textarea rows="5" placeholder="Your Message"></textarea>
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
      </div >
    </>
  );
};

export default QuotePage;
