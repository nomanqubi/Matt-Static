import React from 'react'
import AllProducts from '../components/productsPageComponent/AllProducts'
import ProductsPageSlider from '../components/productsPageComponent/ProductsPageSlider'
import ProductsCategory from '../components/productsPageComponent/ProductsCategory'

const ProductsPage = () => {
  return (
    <div>
     <ProductsPageSlider />
      <ProductsCategory />
      <AllProducts/>
    </div>
  )
}
 
export default ProductsPage
