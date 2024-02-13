import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Lottie from "lottie-react";
import Searchs from "../Animation.json";
import AllProducts from '../data/productsData.js'
import '../styles/Products.css';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Search = () => {
    const navigate = useNavigate()
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { query } = useParams();

    useEffect(() => {
        setFilteredProducts(AllProducts.filter((item) => {
            console.log(item.name.toLowerCase())
            return item.name.toLowerCase().includes(query.toLowerCase())
        }))
    }, [query]);

    const handleBuyNowClick = (productId) => {
        window.scrollTo(0, 0);
        navigate(`/product/${productId}`);
    };

    return (
        <>
            <div className="container mt-5">
                {filteredProducts.length === 0 ? (
                    <div className='d-flex justify-content-center flex-column'>
                        <Lottie animationData={Searchs} />
                        <h1 style={{ textAlign: "center" }}>Product Not Found</h1>
                    </div>
                ) : (
                    <div className="row">
                        <h4 className='mb-4'>Filtered Result</h4>
                        {filteredProducts.map((item, index) => (
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
                )}
            </div>
        </>
    )
}
