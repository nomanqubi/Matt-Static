import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productData from '../../data/productsData';
import "../../styles/singleProduct/singleproduct.css"
import DescriptionSection from './DescriptionSection'
import SingleProductFooter from './SingleProductFooter';
import FeaturedCategories from './FeaturedCategories';
import MySlider from './MySlider'
import Bike from '../../images/M20-IIIPic1.jpg'
import Bikeone from '../../images/1.png'
import Biketwo from '../../images/2.png'
import Bikethree from '../../images/3.png'
import Bikefour from '../../images/4.png'
import Bikefive from '../../images/5.png'
import Products from '../HomePageComponents/HomePageProducts'
import Card from 'react-bootstrap/Card';

const SingleProduct = () => {

    const { productId } = useParams();
    const product = productData.find((p) => p.id.toString() === productId);

    const [selectedColor, setSelectedColor] = useState('#FF0000');
    const [selectedSize, setSelectedSize] = useState('large');
    const [selectedProduct, setSelectedProduct] = useState(product?.images[0]);

    useEffect(() => {
        setSelectedProduct(product?.images[0])
    }, [product])

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleColorChange = (color) => {
        setSelectedColor(color);
    }

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    }

    const handleProductClick = (image) => {
        setSelectedProduct(image); // Update selected product to Bikeone image
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row flex-column">
                            <div className="col">
                                <Card>
                                    <img src={selectedProduct} alt={product.name} className='card_product_img' />
                                </Card>
                            </div>
                            <div className="col">
                                <div className="row mt-3">
                                    {product.images.map(item => (
                                        <div className="col">
                                            <div className='ps-2 pt-2 pb-2 pe-2 cards_product' onClick={() => handleProductClick(item)}>
                                                <img src={item} alt="" style={{ width: "100%", height: "85px" }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="products_res">{product.name}</h1>
                        <h2>Rating</h2>
                        <hr />
                        <table>
                            <tbody>
                                <tr>
                                    <td>Model:</td>
                                    <td>{product.name}</td>
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
                                    <td>Description:</td>
                                    <td>{product.description}</td>
                                </tr>
                                <tr>
                                    <td>Size:</td>
                                    <td>
                                        <button className={`size-button ${selectedSize === 'small' ? 'selected' : ''}`} onClick={() => handleSizeChange('small')}>Small</button>
                                        <button className={`size-button option ${selectedSize === 'medium' ? 'selected' : ''}`} onClick={() => handleSizeChange('medium')}>Medium</button>
                                        <button className={`size-button option ${selectedSize === 'large' ? 'selected' : ''}`} onClick={() => handleSizeChange('large')}>Large</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>
                                        <button className='color-button option' style={{ backgroundColor: '#FF0000', height: '30px' }} onClick={() => handleColorChange('#FF0000')}></button>
                                        <button className='color-button option' style={{ backgroundColor: '#D3D3D3', height: '30px' }} onClick={() => handleColorChange('#D3D3D3')}></button>
                                        <button className='color-button option' style={{ backgroundColor: '#000000', height: '30px' }} onClick={() => handleColorChange('#000000')}></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='order-btn'>Buy Now</button>
                    </div>
                </div>
            </div>
            <DescriptionSection />
            <Products />
            <SingleProductFooter />
        </>
    );
};

export default SingleProduct;
