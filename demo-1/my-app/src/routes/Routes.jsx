import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from '../components/layout/Layout';

import Home from '../pages/home/Home';
import Products from '../pages/products/Products';



const RoutesComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='products' element={<Products />}/> 
      </Routes>
    </Layout>
  )
}

export default RoutesComponent