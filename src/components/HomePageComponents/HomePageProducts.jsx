import React, { useState, useEffect } from 'react';
import '../../styles/Products.css';
import Card from 'react-bootstrap/Card';
import productData from '../../data/productsData';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { category } from '../../data/categoryPic';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {

  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    window.scrollTo(0, 0);
    navigate("/products");
  };

  const handleBuyNowClick = (productId) => {
    window.scrollTo(0, 0);
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []); // Run this effect only once when the component mounts

  return (
    <>
      <div className="container mt-5">
        <div className="row" data-aos="fade-up">
          <div className="col">
            <div className='d-flex justify-content-between'>
              <h4>Products</h4>
              <div className='links_styling'>
                <ul>
                  <li onClick={() => handleSeeAllClick()} className='see-all'>See all<IoIosArrowRoundForward /></li>
                </ul>
              </div>
            </div>
            <hr className='products-hr' />
          </div>
        </div>
        <div className="row">
          {productData.map((item, index) => (
            <div className="col-lg-3 pb-3" key={index} data-aos="fade-down">
              <Card>
                <div className='ps-3 pe-3 pt-3 pb-3 d-flex flex-column justify-content-center align-item-center'>
                  <img src={item.images[0]} className='image-gallery' />
                  <div className='d-flex justify-content-between mt-2'>
                    <h3 className='pt-1' style={{ textAlign: 'center', color: 'black', fontSize: '15px', fontWeight: 'bold', margin: "0px" }}>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className='card_des'>{item.description}</p>
                  <div className='d-flex justify-content-center align-item-center'>
                    <button className="buy-button" onClick={() => handleBuyNowClick(item.id)}>Buy Now</button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

