import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lottie from "lottie-react";
import Notfound from "./Notfound.json";
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import ContactPage from './screens/ContactPage';
import ProductsPage from './screens/ProductsPage';
import SingleProductPage from './screens/SingleProductPage';
import QuotePage from './screens/QoutePage';
import { Search } from './screens/Search';

const NotFound = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col'>
            <h1 style={{ textAlign: "center" }}>Page Not Found</h1>
          </div>
        </div>
      </div>
    </>
  )
}

const App = () => {
  return (

    <BrowserRouter >
      <Header />
      <Nav />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route path="/quote/:productId?" element={<QuotePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
