import React, { useState } from 'react';
import '../../styles/Products.css';
import productData from '../../data/productsData';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { category } from '../../data/categoryPic';
import { IoIosArrowRoundForward } from 'react-icons/io';

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

  return (
    <>
      <div className="container mt-5">
        <div className="row">
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
          {category.map((item, index) => (
            <div key={index} className="col-lg-3 pb-3">
              <Card>
                <div className='ps-3 pe-3 pt-3 pb-3 d-flex flex-column justify-content-center align-item-center'>
                  <img src={item.pic} className='image-gallery' />
                  <div className='d-flex justify-content-between mt-2'>
                    <h3 className='pt-1' style={{ textAlign: 'center', color: 'black', fontSize: '15px', fontWeight: 'bold', margin: "0px" }}>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p style={{ height: "80px" }}>{item.description}</p>
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

