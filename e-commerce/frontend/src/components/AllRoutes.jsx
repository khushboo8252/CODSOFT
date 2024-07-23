import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Products from '../pages/Products.jsx';
import ProductPage from '../pages/ProductPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>}/>
       <Route path="/products/:product_id" element={<PrivateRoute><ProductPage/></PrivateRoute>}/>
    </Routes>
  )
}

export default AllRoutes;