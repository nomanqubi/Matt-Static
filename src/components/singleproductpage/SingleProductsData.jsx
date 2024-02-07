import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productData from '../../data/productsData';
import "../../styles/singleProduct/singleproduct.css"
import DescriptionSection from './DescriptionSection'
import SingleProductFooter from './SingleProductFooter';
import FeaturedCategories from './FeaturedCategories';
import MySlider from './MySlider'

const SingleProduct = () => {
    const [selectedColor, setSelectedColor] = useState('#FF0000');
    const [selectedSize, setSelectedSize] = useState('large');
    let { productId } = useParams();
    const product = productData.find((p) => p.id.toString() === productId);
    
    if (!product) {
        return <div>Product not found</div>;
    }

    const handleColorChange = (color) => {
        setSelectedColor(color);
    }

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    }

    const imageSizeHeight = {
        small: '150px',
        medium: '200px',
        large: '350px',
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className='single-product-detail-main-div'>
                <div className='single-product-image'>
                    <MySlider/>
                </div>
                <div className='detail-div'>
                    <h1>{product.name}</h1>
                    <h2>Rating</h2>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td>Model:</td>
                                <td>{product.name}</td>
                            </tr>
                            <tr>
                                <td>Description:</td>
                                <td>{product.description}</td>
                            </tr>
                            <tr>
                                <td>Brand:</td>
                                <td>{product.name}</td>
                            </tr>
                            <tr>
                                <td>Type:</td>
                                <td>{product.type}</td>
                            </tr>
                            <tr>
                                <td>Availability:</td>
                                <td>{product.availability}</td>
                            </tr>
                            <tr>
                                <td>Size:</td>
                                <td>
                                    <button className={`size-button ${selectedSize === 'small' ? 'selected' : ''}`} onClick={() => handleSizeChange('small')}>Small</button>
                                    <button className={`size-button ${selectedSize === 'medium' ? 'selected' : ''}`} onClick={() => handleSizeChange('medium')}>Medium</button>
                                    <button className={`size-button ${selectedSize === 'large' ? 'selected' : ''}`} onClick={() => handleSizeChange('large')}>Large</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td>
                                    <button className='color-button' style={{ backgroundColor: '#FF0000', height: '30px' }} onClick={() => handleColorChange('#FF0000')}></button>
                                    <button className='color-button' style={{ backgroundColor: '#D3D3D3', height: '30px' }} onClick={() => handleColorChange('#D3D3D3')}></button>
                                    <button className='color-button' style={{ backgroundColor: '#000000', height: '30px' }} onClick={() => handleColorChange('#000000')}></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='order-btn'>Buy Now</button>
                </div>
            </div>
            <DescriptionSection />
            <FeaturedCategories />
            <SingleProductFooter />
        </>

    );
};

export default SingleProduct;
