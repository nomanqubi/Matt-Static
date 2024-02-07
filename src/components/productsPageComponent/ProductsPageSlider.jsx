import React from 'react'
import "../../styles/productspageslider.css"
import {BsArrowRight} from 'react-icons/bs'

const ProductsPageSlider = () => {
  return (
      <div className='productsPage-slider-container'>
          <div className='pic-wrapper'>
          </div>
          <div className="text-div">
            <h4 style={{marginTop:'50px'}}>New Collection</h4>
            <h1>Smart Phone</h1>
            <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to</h6>
            <button>Go to Collection<span style={{marginLeft:'10px'}}><BsArrowRight/></span></button>
          </div>
      </div>
  )
}

export default ProductsPageSlider
