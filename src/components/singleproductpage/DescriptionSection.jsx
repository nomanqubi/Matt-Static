import React, { useState } from 'react';
import '../../styles/Products.css';
import productData from '../../data/productsData';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const descriptions = productData.map(product => product.description);
  const reviews = productData.map(product => product.reviews);
  const shippingDetails = productData.map(product => product.ShippingDetails);

  const [selectedCategory, setSelectedCategory] = useState('Description');

  const categoryData = {
    'Description': descriptions,
    'Reviews': reviews,
    'ShippingDetails': shippingDetails,
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='single-product-container'>
      <div className="list-items">
        <ul className='d-flex list-styling'>
          <div className='text-left d-flex'>
            <li onClick={() => handleCategoryClick('Description')}>Description</li>
            <li onClick={() => handleCategoryClick('Reviews')}>Reviews</li>
            <li onClick={() => handleCategoryClick('ShippingDetails')}>ShippingDetails</li>
          </div>
        </ul>
      </div>
      <hr className='products-hr'style={{marginBottom:'0px'}} />
      <div className="products" style={{border:'1px solid lightgrey',padding:'15px'}}>
        <p className='description-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit omnis, quod mollitia dolorum at blanditiis, minima ad et ducimus debitis! Tenetur vitae aliquam quaerat obcaecati mollitia accusantium cupiditate exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere rem optio, molestias, reiciendis deserunt commodi rerum vel quam quisquam voluptatem magni sequi perferendis esse itaque ipsum? Ut, alias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum incidunt modi optio! Nemo deleniti totam, doloribus reiciendis maiores incidunt odio corrupti consequuntur voluptatem pariatur libero, esse a ipsum officiis?</p>
        <p className='description-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit omnis, quod mollitia dolorum at blanditiis, minima ad et ducimus debitis! Tenetur vitae aliquam quaerat obcaecati mollitia accusantium cupiditate exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere rem optio, molestias, reiciendis deserunt commodi rerum vel quam quisquam voluptatem magni sequi perferendis esse itaque ipsum? Ut, alias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum incidunt modi optio! Nemo deleniti totam, doloribus reiciendis maiores incidunt odio corrupti consequuntur voluptatem pariatur libero, esse a ipsum officiis?</p>
        <p className='description-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit omnis, quod mollitia dolorum at blanditiis, minima ad et ducimus debitis! Tenetur vitae aliquam quaerat obcaecati mollitia accusantium cupiditate exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere rem optio, molestias, reiciendis deserunt commodi rerum vel quam quisquam voluptatem magni sequi perferendis esse itaque ipsum? Ut, alias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum incidunt modi optio! Nemo deleniti totam, doloribus reiciendis maiores incidunt odio corrupti consequuntur voluptatem pariatur libero, esse a ipsum officiis?</p>
        <p className='description-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit omnis, quod mollitia dolorum at blanditiis, minima ad et ducimus debitis! Tenetur vitae aliquam quaerat obcaecati mollitia accusantium cupiditate exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere rem optio, molestias, reiciendis deserunt commodi rerum vel quam quisquam voluptatem magni sequi perferendis esse itaque ipsum? Ut, alias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum incidunt modi optio! Nemo deleniti totam, doloribus reiciendis maiores incidunt odio corrupti consequuntur voluptatem pariatur libero, esse a ipsum officiis?</p>
      </div>
    </div>
  );
};

export default Products;


