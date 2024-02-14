import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import { TiTickOutline } from "react-icons/ti";

const SingleProduct = () => {

    const { productId } = useParams();
    const product = productData.find((p) => p.id.toString() === productId);
    // console.log(product, "product")

    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(product?.images[0]);
    const [count, setCount] = useState(0);
    const [buttonClicked, setButtonClicked] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const handleColorChange = (color) => {
        setSelectedColor(color);
        console.log("color:", color);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        console.log("size:", size);
    };

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
        setButtonClicked("increment");
        console.log("Value:",count)
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
            setButtonClicked("decrement");
        }
    };

    useEffect(() => {
        setSelectedProduct(product?.images[0])
    }, [product])

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleProductClick = (image) => {
        setSelectedProduct(image); // Update selected product to Bikeone image
    };

    const handleBuyNow = () => {
        navigate(`/quote/${productId}`, { state: { count, selectedSize, selectedColor }});
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
                                        <button
                                            className={selectedSize === "Small" ? 'size-button clicked' : 'size-button'}
                                            onClick={() => handleSizeChange("Small")}
                                        >
                                            Small
                                        </button>
                                        <button
                                            className={selectedSize === "Medium" ? 'size-button clicked' : 'size-button'}
                                            onClick={() => handleSizeChange("Medium")}
                                        >
                                            Medium
                                        </button>
                                        <button
                                            className={selectedSize === "Large" ? 'size-button clicked' : 'size-button'}
                                            onClick={() => handleSizeChange("Large")}
                                        >
                                            Large
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Color:</td>
                                    <td>
                                        <button
                                            className='color-button'
                                            style={{ backgroundColor: 'red' }}
                                            onClick={() => handleColorChange("Red")}
                                        >
                                            {selectedColor === "Red" && <TiTickOutline style={{ color: 'white', fontSize: "20px" }} />}
                                        </button>
                                        <button
                                            className='color-button'
                                            style={{ backgroundColor: 'grey' }}
                                            onClick={() => handleColorChange("Grey")}
                                        >
                                            {selectedColor === "Grey" && <TiTickOutline style={{ color: 'white', fontSize: "20px" }} />}
                                        </button>
                                        <button
                                            className='color-button'
                                            style={{ backgroundColor: 'black' }}
                                            onClick={() => handleColorChange("Black")}
                                        >
                                            {selectedColor === "Black" && <TiTickOutline style={{ color: 'white', fontSize: "20px" }} />}
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Quantity:</td>
                                    <td>
                                        <button
                                            className={buttonClicked === "decrement" ? 'increment-button clicked' : 'increment-button'}
                                            onClick={handleDecrement}
                                        >
                                            -
                                        </button>
                                        <input type="text" value={count} readOnly />
                                        <button
                                            className={buttonClicked === "increment" ? 'increment-button clicked' : 'increment-button'}
                                            onClick={handleIncrement}
                                        >
                                            +
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='order-btn' onClick={handleBuyNow}>Buy Now</button>
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
