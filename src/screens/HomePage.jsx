import React from 'react'
import FeatureCategories from './../components/HomePageComponents/FeatureCategories'
import Testimonials from '../components/HomePageComponents/Testimonials'
import Slider from '../components/HomePageComponents/Slider'
import SalesCard from '../components/HomePageComponents/SalesCard'
import Products from '../components/HomePageComponents/HomePageProducts'



const HomePage = () => {
  return (
   <>
   <Slider />
   <SalesCard />
   <Products />
   <FeatureCategories />
   <Testimonials />
   </>
  )
}

export default HomePage
