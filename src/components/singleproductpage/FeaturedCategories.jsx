import React, { useState } from 'react';
import '../../styles/Products.css';
import productData from '../../data/productsData';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const first8Products = productData.slice(0, 4);

  const [selectedCategory, setSelectedCategory] = useState('Featured');

  const categoryData = {
    'Featured': first8Products,
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const handleBuyNowClick = (productId) => {
    window.scrollTo(0, 0);
    navigate(`/product/${productId}`);
  };

  return (
    <div className='featured-product-container' style={{height:'500px'}}>
      <div className="list-items">
        <ul className='d-flex list-styling'>
          <div className='text-left d-flex'>
          <li onClick={() => handleCategoryClick('Featured')}>Featured</li>
          </div>
        </ul>
      </div>
      <hr className='products-hr' />
      <div className="products">
        {categoryData[selectedCategory].map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.pic} alt='dull' height={130} width={40} className='image-gallery'/>
            <h3 style={{ textAlign: 'center', color: 'black', fontSize: '15px', fontWeight: 'bold' }}>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">{product.price}</span>
            <button className="buy-button" onClick={() => handleBuyNowClick(product.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

