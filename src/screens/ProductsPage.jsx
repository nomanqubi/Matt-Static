import React from 'react'
import Products from '../components/HomePageComponents/HomePageProducts'
import ProductsPageSlider from '../components/productsPageComponent/ProductsPageSlider'
import ProductsCategory from '../components/productsPageComponent/ProductsCategory'

const ProductsPage = () => {
  return (
    <div>
     <ProductsPageSlider />
      <ProductsCategory />
      <Products />
    </div>
  )
}
 
export default ProductsPage
