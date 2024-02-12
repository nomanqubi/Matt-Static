import React from 'react'
import "../../styles/productspageslider.css"
import { BsArrowRight } from 'react-icons/bs'
import Cycle from '../../images/CycleProduct.jpg'

const ProductsPageSlider = () => {
  return (
    <>
    <div className="container-fluid productsPage-slider-container">
    <div className="container mt-3">
        <div className="row">
          <div className="col-lg-4 p-0">
            <img src={Cycle} alt="" />
          </div>
          <div className="col-lg-6 slider_content p-0">
            <div className="text-div">
              <h4>New Collection</h4>
              <h1>Smart Phone</h1>
              <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductsPageSlider
