import React from 'react';
import { category } from "../../data/categoryPic";
import Card from 'react-bootstrap/Card';
import { products } from '../../data/FeatureProductData';

const ProductsCategory = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h4>Featured Categories</h4>
                        <hr className='products-hr' />
                    </div>
                </div>
                <div className="row">
                    {products.map((products, index) => (
                        <div key={index} className="col-md-4 pb-3">
                            <Card>
                                <div className='ps-3 pe-3 pt-3 pb-3 d-flex flex-column justify-content-center align-item-center'>
                                    <div className='images'>
                                        <img src={products.pic1} alt='dull' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px' }} />
                                        <img src={products.pic2} alt='dull' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px' }} />
                                        <img src={products.pic3} alt='dull' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px' }} />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsCategory;
